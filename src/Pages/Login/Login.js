import React, { useContext, useEffect, useState } from 'react'
import Input from '../../UI/Input'
import Button from '../../UI/Button';
import classes from "./Login.module.css"
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const [passwordValidate, setPasswordValidate] = useState('')
    const [emailValidate, setEmailValidate] = useState('')

    const [formValidate, setFormValidate] = useState(false)
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate()


    console.log(authCtx.token)

    // useEffect(()=>{
    // if(authCtx.token){
    //   authCtx.getUserData(authCtx.token)
      
    // }else{
    //   navigate("/login")
    // }
    // },[authCtx.token])
    
    const validateEmail = () => {
        
        // if(!email.includes("@")){
        //   setError("Please Enter Valid Email.")
        // }
        setEmailValidate(email.includes("@"))
    }
    
    const validatePassword = () =>{
        setPasswordValidate(password.trim().length > 6)
    }
    
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
        setFormValidate(event.target.value.includes("@") && password.trim().length > 6 )
    }
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
        setFormValidate(email.includes("@") && event.target.value.trim().length > 6 ) 
        
    }



    
    
    
    const handleFormSubmit = async(event) => {
            event.preventDefault();
            //console.log(email,password,confirmPassword)
            setIsLoading(true)
            
            try{
            let url ="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBqneiGRuQnRsXP9KMWcL0KKPcEVssnBVM"
    
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
                authCtx.login(data.idToken)
                authCtx.getUserData(data.idToken)
                navigate("/")
            }else{
                let errorMessage = "Something went wrong!"
                const data = await response.json();
                if (data.error){
                    errorMessage=data.error.message
                    
                }
                console.log(errorMessage)
                
                }
                setIsLoading(false)
            }catch(error){
                console.log(error)
            }
            setIsLoading(false)
    
            setEmail("")
            setPassword("")
            
        }
    
    
  return (
    <div className={classes.container}>
      {error && <div className={classes.error}>{error}</div>}
      {isLoading &&  <p className={classes.error}>Loading...</p>}
    <div className={classes.form}>
      <h2>Login</h2>
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
        
        <Button
        type="submit"
        disabled={!formValidate}
        
        >Login</Button>
        <p className={classes.link}><a href='/forgot'>forgot password</a></p>
      </form>
    </div>
      <div className={classes["have-account"]}>
        <Button type="button" ><Link to="/signup">Don't have account, Sign Up</Link></Button>
      </div>
    </div>
  )
}

export default Login