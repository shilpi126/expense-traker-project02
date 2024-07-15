import React from 'react'
import Button from '../UI/Button'
import { Link } from 'react-router-dom'
import classes from "./ProfileHeader.module.css"


const ProfileHeader = (props) => {
    
   const handleClick = () => {
        props.onActive()
   }


return (
    <div className={classes.header}>
    <div className={classes.welcome}>Welcome To Expense Traker</div>
    <div className={classes.action}>
        <Button onClick={handleClick}>Your Profile is incompleted : <span>Complete Now</span></Button>

        
    </div>
    </div>
)
}

export default ProfileHeader