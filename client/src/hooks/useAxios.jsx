import React, { useEffect, useRef } from 'react';
import  { jwtDecode }  from "jwt-decode";
import { useAuth } from './useAuth';
import useRefresherToken from './useRefresher';
import { AxiosInstance } from '../api/axios';

export default  function useAxios() {
    const {accessToken, setAccessToken, setUser} = useAuth();
    const refresh = useRefresherToken();

    let failedQueue = [];
    const isRefreshing = useRef(false);

    function processQueue(error, token = null) {
        failedQueue.forEach(p => (error ? p.reject(error) : p.resolve(token)));
        failedQueue = [];
    }

  useEffect(() => {
    const request = AxiosInstance.interceptors.request.use(
       async (config)=>{
            const token  = accessToken;
            if(!token) return config;
            if(token){
                const {exp} = jwtDecode(token);
                const isExpired = exp * 1000 < Date.now();

                if(isExpired){
                    const newToken = await refresh();
                
                    config.headers["Authorization"] = `Bearer ${newToken}`;
                }
                else{
                    config.headers["Authorization"] = `Bearer ${token}`;
                }
            }
            return config;
        },
        (error)=> Promise.reject(error)
    );

    const response = AxiosInstance.interceptors.response.use(
        (res) => res,
        async (err)=>{
            const originalRequest = err?.config;

           if (err?.response?.status === 403) {
                setUser(null); // logout user
                setAccessToken(null);
                return Promise.resolve(); // avoid crashes  
            }

            if(err?.response?.status === 401 && !originalRequest?._retry){
                originalRequest._retry = true;
                
                if (isRefreshing.target) {
                    return new Promise((resolve, reject) => {
                        failedQueue.push({ resolve, reject });
                    }).then(token => {
                        originalRequest.headers["Authorization"] = `Bearer ${token}`;
                        return AxiosInstance(originalRequest);
                    });
                }

                isRefreshing.target = true;
            try {
                const refreshRes = await refresh();
                AxiosInstance.defaults.headers["Authorization"] = `Bearer ${refreshRes}`;
                processQueue(null, refreshRes);
                return AxiosInstance(originalRequest);
            } catch (refreshErr) {
                processQueue(refreshErr, null);
                setUser(null);
                setAccessToken(null);
                return Promise.resolve(); 
            } finally {
                isRefreshing.target = false;
            }
      }
        return Promise.reject(err)
    })

    return () => {
        AxiosInstance.interceptors.request.eject(request);
        AxiosInstance.interceptors.response.eject(response);
    };
  }, [accessToken, refresh])
    
    

  return AxiosInstance
}
