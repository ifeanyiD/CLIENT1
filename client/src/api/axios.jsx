import axios from "axios"

const baseURL = "http://localhost:5000/api";

export const API = axios.create({
  baseURL: baseURL,
  withCredentials : true
});


export const AxiosInstance = axios.create({
  baseURL : baseURL,
  withCredentials : true
})


export default API