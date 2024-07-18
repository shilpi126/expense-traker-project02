import React from 'react'
import classes from "./ExpenseList.module.css"
const ExpenseList = (props) => {
  //console.log(props.expenseData)
  return (
   

    <div className={classes.container}>
     
     <ul className={classes.ul}>
        {props.expenseData.map((item,index)=>(
              <li key={index+1}>
              <p>{item.price}</p>
              <p>{item.description}</p>
              <p>{item.category}</p>
              </li>
             
        ))}
       
      </ul>
    </div>
    
    
  )
}

export default ExpenseList