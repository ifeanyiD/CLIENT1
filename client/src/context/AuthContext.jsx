import {useState } from "react"
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

