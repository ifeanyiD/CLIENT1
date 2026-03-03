import {useState } from "react"
// import API, { attachInterceptors } from "../api/axios"
import { AuthContext } from "./Context";


export const AuthProvider = ({children}) =>{
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  return (
    <AuthContext.Provider value={{user, accessToken, setUser, setAccessToken}}>
      {children}
  </AuthContext.Provider>
  )
}






// export const AuthContext = createContext()

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null)
//   const [accessToken, setAccessToken] = useState(null)
//   const [loading, setLoading] = useState(true)

//   const login = (userData, token) => {
//     setUser(userData)
//     setAccessToken(token)
//   }

//   const logout = async () => {
//     await API.post("/auth/logout")
//     setUser(null)
//     setAccessToken(null)
//   }

//   useEffect(() => {
//     attachInterceptors(
//       () => accessToken,
//       (newToken) => setAccessToken(newToken)
//     )
//   }, []) // attach once

//   useEffect(() => {
//     const refresh = async () => {
//       try {
//         const { data } = await API.post("/auth/refresh")
//         setAccessToken(data.accessToken)
//         const profile = await API.get("/user/profile")
//         setUser(profile.data)
//       } catch {
//         setUser(null)
//         setAccessToken(null)
//       } finally {
//         setLoading(false)
//       }
//     }

//     refresh()
//   }, [])

//   return (
//     <AuthContext.Provider
//       value={{ user, accessToken, logout, login, loading }}
//     >
//       {children}
//     </AuthContext.Provider>
//   )
// }