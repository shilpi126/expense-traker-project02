import React, { useContext, useState } from 'react'

import ContactDetailsForm from '../../components/ContactDetails/ContactDetailsForm'
import Button from '../../UI/Button'
import classes from "./Profile.module.css"
//import AuthContext from '../../store/auth-context'
import { Route, Routes} from 'react-router-dom'
import User from '../User/User'
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader'
const Profile = () => {
  

  return (
    <>
    <ProfileHeader />


<Routes>
<Route path='contact' element={  <ContactDetailsForm/>}/>
  
</Routes>
<User/>
    
  
    </>
  )
}

export default Profile