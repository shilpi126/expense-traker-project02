import React, { useState } from 'react'
import ProfileHeader from '../../components/ProfileHeader'
import ContactDetailsForm from '../../components/ContactDetails/ContactDetailsForm'

const Profile = () => {
  const [toggle,setToggle] = useState(false)

  const handleButtonClick = () => {
      setToggle((prev) => !prev)
  }

  return (
    <>
    <ProfileHeader onActive={handleButtonClick}/>
    {toggle &&  <ContactDetailsForm />
    }
 
    
  
    </>
  )
}

export default Profile