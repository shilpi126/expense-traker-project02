import React, { useContext } from 'react'
import Button from '../UI/Button'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import classes from "./ProfileHeader.module.css"
//import AuthContext from '../store/auth-context'
import { authAction } from '../store/authSlice'
import { useDispatch } from 'react-redux'

const ProfileHeader = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleLogout = () => {
        
        dispatch(authAction.logout());
        navigate("/login")
    }


return (
    <div className={classes.header}>
    <div className={classes.welcome}>Welcome To Expense Traker</div>
    <div><Button type="button" onClick={handleLogout}>Logout</Button></div>
    <div className={classes.action}>
        <Button >Your Profile is incompleted : <Link to="contact">Complete Now</Link></Button>
    </div>
    <Outlet/>
    </div>
)
}

export default ProfileHeader