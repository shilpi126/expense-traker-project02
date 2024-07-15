import React, { useEffect, useState } from 'react'
import AuthContext from './auth-context'


const AuthProvider = (props) => {
  const initialToken = localStorage.getItem('token')
    const [token, setToken] = useState(initialToken)
    const [userData, setUserData] = useState({})
    

    const login = (token) => {
        setToken(token)
        localStorage.setItem("token",token)
    }

    const getUserData = async() => {
        
      try{
          const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBqneiGRuQnRsXP9KMWcL0KKPcEVssnBVM",{
              method:'POST',
              body:JSON.stringify({
                  idToken:token,
                  
              }),

              headers:{
                  "content-type":"application/json"
              }
 
          })

          if(response.ok){

              const data = await response.json()
              setUserData(...data.users)
          }else{
              const data = await response.json()
              alert(data.error.message)
          }
      }catch(err){
          console.log(err)
      }

  }

  


  useEffect(()=>{
      getUserData()
  },[])

  console.log(userData)


    const authValue = {
        token,
        user:userData,
        login,

    }


  return (
    <AuthContext.Provider value={authValue}>{props.children}</AuthContext.Provider>
  )
}

export default AuthProvider