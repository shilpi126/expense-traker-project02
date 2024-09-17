import React, { useEffect } from 'react'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';

import { toggleTheme} from '../store/themeSlice';


const ThemeToggle = () => {
    const dispatch = useDispatch()
    const isDarkMode = useSelector((state)=>state.theme.isDarkMode);

    const handleToggleTheme = () => {
        dispatch(toggleTheme())
        
    }

    useEffect(() => {
        if(isDarkMode){

            document.body.style.backgroundColor = "#02001c";
            document.body.style.color = '#ffffff';
            
        }else{
            document.body.style.backgroundColor = '#ffffff';
            document.body.style.color = "#02001c";
        }
    },[isDarkMode])


    return (
    
        <div style={{ marginRight:"20px"}}>
        {isDarkMode  ? <MdOutlineLightMode  onClick={handleToggleTheme}/> 
        : 
        <BsFillMoonStarsFill onClick={handleToggleTheme}  /> 
        }
        </div>
    )
}

export default ThemeToggle