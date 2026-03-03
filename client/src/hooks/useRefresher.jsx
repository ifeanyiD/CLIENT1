import React from 'react';
import { useAuth } from './useAuth';
import API from '../api/axios';

export default function useRefresherToken() {
    const {setUser, setAccessToken} = useAuth();
    const refresher = async ()=>{
       try {
         const response = await API.get("/auth/refresh", {
            withCredentials : true
        });
        setUser(response.data.user);
        setAccessToken(response.data.accessToken)
        return response.data.accessToken
       } catch (err) {
          setUser(null);
          setAccessToken(null)
          return null
       }
  }

  return refresher
}
