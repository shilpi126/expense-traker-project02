import React, { useState } from 'react'
import Input from '../../UI/Input'
import Button from '../../UI/Button';
import classes from "./Signup.module.css"
import { Link } from 'react-router-dom';
let url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBqneiGRuQnRsXP9KMWcL0KKPcEVssnBVM";
          
const Signup = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
  const [passwordValidate, setPasswordValidate] = useState('')
  const [emailValidate, setEmailValidate] = useState('')
  const [confirmPasswordValidate, setConfirmPasswordValidate] = useState('')
  const [formValidate, setFormValidate] = useState(false)
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false)





  const validateEmail = () => {
    
    // if(!email.includes("@")){
    //   setError("Please Enter Valid Email.")
    // }
      setEmailValidate(email.includes("@"))
  }

  const validatePassword = () =>{
    setPasswordValidate(password.trim().length > 6)
  }

  const validateConfirmPassword = () =>{
  setConfirmPasswordValidate(confirmPassword.trim().length > 6 && confirmPassword === password)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
    setFormValidate(event.target.value.includes("@") && password.trim().length > 6 )
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
    setFormValidate(email.includes("@") && (event.target.value.trim().length > 6 && confirmPassword === event.target.value)) 
    
  }

  const handleConfirmPassChange = (event) => {
    setConfirmPassword(event.target.value)
    setFormValidate(email.includes("@") && (event.target.value.trim().length > 6 && event.target.value === password))
    
  }


  const handleFormSubmit = async(event) => {
        event.preventDefault();
        //console.log(email,password,confirmPassword)
        setIsLoading(true)
        
        try{
        
          const response = await fetch(url,{
            method:'POST',
            body:JSON.stringify({
              email:email,
              password:password,
              returnSecureToken:true,
            }),
            headers:{
              'Content-Type': 'application/json',
            }
          })
          
          
          if(response.ok){
            const data = await response.json();
            //alert("user successfuly register")
            console.log(data)
          }else{
            let errorMessage = "Something went wrong!"
            const data = await response.json();
            if (data.error){
              
              errorMessage=data.error.message
              
            }
            alert(errorMessage)
            
          }
          setIsLoading(false)
        }catch(error){
          console.log(error)
        }
        setIsLoading(false)

        setEmail("")
        setPassword("")
        setConfirmPassword("")
  }

  

  return (
    <div className={classes.container}>
      {error && <div className={classes.error}>{error}</div>}
      {isLoading &&  <p className={classes.error}>Loading...</p>}
    <div className={classes.form}>
      <h2>Sign Up</h2>
    <form onSubmit={handleFormSubmit}>
        <Input
        type="email"
        id="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
        onBlur={validateEmail}
        />
          <Input
        type="password"
        id="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
        onBlur={validatePassword}
        />
        <Input
        id="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={handleConfirmPassChange}
        onBlur={validateConfirmPassword}
        />
        <Button
        type="submit"
        disabled={!formValidate}
        
        >Sign Up</Button>
      </form>
    </div>
      <div className={classes["have-account"]}>
        <Button type="button"><Link to="/login">Have an account? Login</Link></Button>
      </div>
    </div>
  )
}

export default Signup