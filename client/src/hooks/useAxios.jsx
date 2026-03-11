import { useEffect } from "react";
import { AxiosInstance } from "../api/axios";
import { useAuth } from "./useAuth";
import useRefresherToken from "./useRefresher";

export default function useAxios() {

  const { accessToken, setAccessToken } = useAuth();
  const refresh = useRefresherToken();

  useEffect(() => {

    const requestIntercept = AxiosInstance.interceptors.request.use(
      config => {

        if (!config.headers["Authorization"] && accessToken) {
          config.headers["Authorization"] = `Bearer ${accessToken}`;
        }

        return config;
      }
    );

    const responseIntercept = AxiosInstance.interceptors.response.use(
      res => res,
      async err => {

        const prevRequest = err?.config;

        if (err?.response?.status === 401 && !prevRequest?.sent) {

          prevRequest.sent = true;

          const newToken = await refresh();

          setAccessToken(newToken);

          prevRequest.headers["Authorization"] = `Bearer ${newToken}`;

          return AxiosInstance(prevRequest);
        }

        return Promise.reject(err);
      }
    );

    return () => {
      AxiosInstance.interceptors.request.eject(requestIntercept);
      AxiosInstance.interceptors.response.eject(responseIntercept);
    };

  }, [accessToken, refresh, setAccessToken]);

  return AxiosInstance;
}