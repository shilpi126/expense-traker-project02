import React, { useState } from 'react'
import AuthContext from './auth-context'


const AuthProvider = (props) => {
    const [token, setToken] = useState('')
    

    const login = (token) => {
        setToken(token)
        // localStorage.setItem("token",token)
    }


    const authValue = {
        token,
        login,

    }


  return (
    <AuthContext.Provider value={authValue}>{props.children}</AuthContext.Provider>
  )
}

export default AuthProvider