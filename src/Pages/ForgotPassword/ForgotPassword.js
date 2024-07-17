import React, { useContext, useEffect, useState } from 'react'
import Input from '../../UI/Input'
import Button from '../../UI/Button';
import classes from "./ForgotPassword.module.css"
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

const ForgotPassword = () => {

    const [email,setEmail] = useState("");
   
    const [emailValidate, setEmailValidate] = useState('')

    const [formValidate, setFormValidate] = useState(false)
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate()


    
    const validateEmail = () => {
        
        // if(!email.includes("@")){
        //   setError("Please Enter Valid Email.")
        // }
        setEmailValidate(email.includes("@"))
    }
    
  
    
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
        setFormValidate(event.target.value.includes("@"))
    }
    
  

  

    
    
    
    const handleFormSubmit = async(event) => {
            event.preventDefault();
            //console.log(email,password,confirmPassword)
            setIsLoading(true)
            
            try{
            let url ="https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBqneiGRuQnRsXP9KMWcL0KKPcEVssnBVM"
    
                const response = await fetch(url,{
                method:'POST',
                body:JSON.stringify({
                    email:email,
                    requestType	:"PASSWORD_RESET",
                }),
                headers:{
                    'Content-Type': 'application/json',
                }
            })
            
            
            if(response.ok){
                const data = await response.json();
                //alert("user successfuly register")
                console.log(data)
                navigate("/login")
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
            
            
        }
    
  return (

<div className={classes.container}>
      {error && <div className={classes.error}>{error}</div>}
      {isLoading &&  <p className={classes.error}>Loading...</p>}
   <div className={classes.innercontainer}>
    <div className={classes.img}>
        <img src='https://th.bing.com/th/id/OIP.TC5KOs_DlhM--Xy0xm7ahQHaHa?w=190&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7'/>
    </div>
    <div  >
    <div className={classes.form}>
      <h2>Forgot Password</h2>
    <form onSubmit={handleFormSubmit}>
        <Input
        type="email"
        id="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
        onBlur={validateEmail}
        />
       

        <Button
        type="submit"
        disabled={!formValidate}
        
        >Forgot Password</Button>
            <p className={classes.link}><Link to='/forgot-password'>New user, Signup</Link></p>
      </form>

    </div>
    
    </div>
   </div>
</div>
  )
}

export default ForgotPassword