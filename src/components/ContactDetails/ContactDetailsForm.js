import React, { useContext, useState } from 'react'
import Input from '../../UI/Input'
import Button from '../../UI/Button'
import classes from "./ContactDetailsForm.module.css"
//import AuthContext from '../../store/auth-context'
import { useNavigate } from 'react-router-dom'

const ContactDetailsForm = () => {
    //const authCtx = useContext(AuthContext)
    //console.log(authCtx.token)
    const navigate = useNavigate()
    
    const [fullName, setFullName] = useState()
    const [profileUrl,setProfileUrl] = useState()
  

    const handleNameChange = (event) => {
        setFullName(event.target.value)
    }

    const handleProfileUrlChange = (event) =>{
        setProfileUrl(event.target.value)
    }


    const handleFormSubmit = async(event) => {
        event.preventDefault()
        //console.log(fullName,profileUrl)
        
        try{
            
                const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBqneiGRuQnRsXP9KMWcL0KKPcEVssnBVM",{
                    method:'POST',
                    body:JSON.stringify({
                          //idToken:authCtx.token,
                          displayName:fullName,
                          photoUrl:profileUrl,
                        //   deleteAttribute: "DISPLAY_NAME",
                          returnSecureToken:true,
                    }),
       
                })
    
                if(response.ok){
    
                    const data = await response.json()
                    console.log(data)
                    navigate("/")
                }else{
                    const data = await response.json()
                    console.log(data.error.message)
                }
          
        }catch(err){
            console.log(err)
        }
//   setFullName("")
//   setProfileUrl("")
    }

    
 



return (
    <div className={classes.container}>
        <div className={classes.btn}>
            <h2>Contact Details</h2>
            <Button type="button">Cancle</Button>
        </div>
        <form onSubmit={handleFormSubmit}>
        <div className={classes["input-cont"]}>
        <Input
        type="text"
        id="fullname"
        label="Full Name :"
        value={fullName}
        onChange={handleNameChange}
        
        />
        <Input
        type="url"
        id="profilelink"
        label="Profile Photo Url :"
        value={profileUrl}
        onChange={handleProfileUrlChange}
        
        />
        </div>
        <Button type="submit">Update</Button>
        </form>
    </div>
    )
}

export default ContactDetailsForm