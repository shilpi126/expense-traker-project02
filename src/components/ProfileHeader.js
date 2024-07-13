import React from 'react'
import Button from '../UI/Button'
import { Link } from 'react-router-dom'
import classes from "./ProfileHeader.module.css"


const ProfileHeader = () => {
return (
    <div className={classes.header}>
    <div className={classes.welcome}>Welcome To Expense Traker</div>
    <div className={classes.action}>
        <Button>Your Profile is incompleted :</Button>
        <Link>Complete Now</Link>
    </div>
    </div>
)
}

export default ProfileHeader