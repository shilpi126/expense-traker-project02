import React from 'react'
import classes from "./Header.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { authAction } from '../../store/authSlice'
import Button from '../../UI/Button'
import { toggleTheme } from '../../store/themeSlice'
import DownloadButton from '../DownloadButton'
import ThemeToggle from '../ThemeToggle'

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isDarkMode = useSelector((state)=>state.theme.isDarkMode);

    //console.log(isDarkMode)
    
    const handleLogout = () => {
        
        dispatch(authAction.logout());
        navigate("/login")
    }

    


  return (
    <div className={classes.head}>
        <div className={classes["left-div"]}>
        <div >Expense Traker</div>
        <ul>
            
            <li>Home</li>
            <li>Products</li>
            <li>About Us</li>
        </ul>
        </div>

        <div className={classes["right-div"]}>

        <ThemeToggle />
        <DownloadButton />
        <Button type="button" onClick={handleLogout}>Logout</Button>
        </div>

        </div>
    )
}

export default Header