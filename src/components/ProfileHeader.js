import React from 'react'
import Button from '../UI/Button'
import { Link, Outlet } from 'react-router-dom'
import classes from "./ProfileHeader.module.css"


const ProfileHeader = (props) => {
    
   const handleClick = () => {
        props.onActive()
   }


return (
    <div className={classes.header}>
    <div className={classes.welcome}>Welcome To Expense Traker</div>
    <div className={classes.action}>
        <Button >Your Profile is incompleted : <Link to="contact">Complete Now</Link></Button>

        
    </div>
    <Outlet/>
    </div>
)
}

export default ProfileHeader