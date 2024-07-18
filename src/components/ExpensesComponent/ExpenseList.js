import React, { useContext, useState } from 'react'
import classes from "./ExpenseList.module.css"
import ExpenseContext from '../../store/expense-context'
const ExpenseList = (props) => {
  const expenseCtx = useContext(ExpenseContext)
  //console.log(expenseCtx.expenses)
  


  return (
    

    <div className={classes.container}>

    <ul className={classes.ul}>
      {expenseCtx.isLoading && <p>Loading...</p>}
      {expenseCtx.error && expenseCtx.error}
      {!expenseCtx.expenses && <p>Expenses not found...</p>}
      {expenseCtx.expenses.map((item,index)=>(
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