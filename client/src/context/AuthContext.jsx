import {useState } from "react"
import { AuthContext } from "./Context";


export const AuthProvider = ({children}) =>{
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(true)

  return (
    <AuthContext.Provider value={{user, accessToken, setUser, setAccessToken, loading, setLoading}}>
      {children}
  </AuthContext.Provider>
  )
}

