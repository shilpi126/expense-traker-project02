import React, { useEffect, useState } from 'react'
import AuthContext from './auth-context'
import { useNavigate } from 'react-router-dom'


const AuthProvider = (props) => {
  const initialToken = localStorage.getItem('token')
  const existingUser = JSON.parse(localStorage.getItem("userData"))
    const [token, setToken] = useState(initialToken)
    const [userData, setUserData] = useState({})
    const navigate = useNavigate()

    const userIsLoggedIn = !!token;

    const login = (token) => {
      setToken(token)
      localStorage.setItem("token",token)
  }

    useEffect(() => {

        if(existingUser && token){
          setUserData(existingUser)
          getUserData(token)
        }
    },[])






    const getUserData = async(userToken) => {
        
      try{
          const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBqneiGRuQnRsXP9KMWcL0KKPcEVssnBVM",{
              method:'POST',
              body:JSON.stringify({
                idToken:userToken,
                  
              }),

              headers:{
                  "content-type":"application/json"
              }
 
          })

          if(response.ok){

              const data = await response.json()
              
              setUserData(...data.users)
              localStorage.setItem('userData', JSON.stringify(userData))
          }else{
              const data = await response.json()
              console.log(data.error.message)
          }
      }catch(err){
          console.log(err)
      }

  }

  
  const sendVerifyEmailId = async(token) => {
        
    try{
      const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBqneiGRuQnRsXP9KMWcL0KKPcEVssnBVM",{
          method:'POST',
          body:JSON.stringify({
            idToken:token,
            requestType: "VERIFY_EMAIL",
          }),

          headers:{
              "content-type":"application/json"
          }

      })

      if(response.ok){

          const data = await response.json()
          
          console.log(data)

      }else{
          const data = await response.json()
          console.log(data.error.message)
      }
  }catch(err){
      console.log(err)
  }
  }





    const authValue = {
        token,
        user:userData,
        login,
        isLoggedIn:userIsLoggedIn,
        getUserData,
        verifyEmailId:sendVerifyEmailId,
    }


  return (
    <AuthContext.Provider value={authValue}>{props.children}</AuthContext.Provider>
  )
}

export default AuthProvider