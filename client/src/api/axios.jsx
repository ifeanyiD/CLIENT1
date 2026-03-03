import axios from "axios"

const baseURL = "http://localhost:5000/api";

export const API = axios.create({
  baseURL: baseURL,
});


export const AxiosInstance = axios.create({
  baseURL : baseURL,
  withCredentials : true
})
// let isRefreshing = false
// let refreshSubscribers = []

// function onRefreshed(token) {
//   refreshSubscribers.forEach(cb => cb(token))
//   refreshSubscribers = []
// }

// function addSubscriber(callback) {
//   refreshSubscribers.push(callback)
// }

// export const attachInterceptors = (getToken, setToken) => {

//   API.interceptors.request.use((req) => {
//     const token = getToken()
//     if (token) {
//       req.headers.Authorization = `Bearer ${token}`
//     }
//     return req
//   })

//   API.interceptors.response.use(
//     res => res,
//     async error => {
//       const originalRequest = error.config

//       if (error.response?.status !== 401) {
//         return Promise.reject(error)
//       }

//       if (originalRequest._retry) {
//         return Promise.reject(error)
//       }

//       originalRequest._retry = true

//       if (!isRefreshing) {
//         isRefreshing = true

//         try {
//           const { data } = await API.post("/auth/refresh")

//           isRefreshing = false
//           setToken(data.accessToken)
//           onRefreshed(data.accessToken)

//           originalRequest.headers.Authorization = `Bearer ${data.accessToken}`
//           return API(originalRequest)

//         } catch (err) {
//           isRefreshing = false
//           window.location.href = "/login"
//           return Promise.reject(err)
//         }
//       }

//       return new Promise(resolve => {
//         addSubscriber(token => {
//           originalRequest.headers.Authorization = `Bearer ${token}`
//           resolve(API(originalRequest))
//         })
//       })
//     }
//   )
// }

export default API