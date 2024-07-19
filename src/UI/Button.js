import React from 'react'
import classes from "./Button.module.css"


const Button = (props) => {
  return (
    <div>
        <button
        id={props.id ? props.id : ''}
        className={props.disabled ? classes.notactive : classes.active}
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled}
        >{props.children}</button>
      
    </div>
  )
}

export default Button