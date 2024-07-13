import React from 'react'

const Input = (props) => {
  return (
    <div>
        <label htmlFor={props.id}>{props.label}</label>
        <input
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        onBlur={props.onBlur}
        
        />
    </div>
  )
}

export default Input