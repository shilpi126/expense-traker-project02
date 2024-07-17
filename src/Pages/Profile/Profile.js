import React, { useContext, useState } from 'react'
import ProfileHeader from '../../components/ProfileHeader'
import ContactDetailsForm from '../../components/ContactDetails/ContactDetailsForm'
import Button from '../../UI/Button'
import classes from "./Profile.module.css"
import AuthContext from '../../store/auth-context'
import { Route, Routes} from 'react-router-dom'
const Profile = () => {
  

  return (
    <>
    <ProfileHeader />


<Routes>
<Route path='contact' element={  <ContactDetailsForm/>}/>
  
</Routes>

    
  
    </>
  )
}

export default Profile