import React, { useContext, useState } from 'react'
import classes from "./ExpenseList.module.css"
import ExpenseContext from '../../store/expense-context'
import Button from "../../UI/Button"



const ExpenseList = (props) => {
  const expenseCtx = useContext(ExpenseContext)
  // const [isEdit, setIsEdit] = useState(false)

  

  const handleEditExpense = (event) => {
    
    const id = event.target.id;
    const editItem = expenseCtx.expenses.find((item) => item.id == id)
    
    props.onEditData(true,editItem)
    
    expenseCtx.deleteExpense(id);
    
  }

  const handleDeleteExpense = (event) => {
    
    expenseCtx.deleteExpense(event.target.id)
  }




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
             <div className={classes.action}>
             <Button id={item.id} type="button" onClick={handleEditExpense}>Edit</Button>
             <Button id={item.id} type="button" onClick={handleDeleteExpense}>Delete</Button>
             </div>
              </li>
              
        ))}
        
      </ul>
    </div>
    
    
  )
}

export default ExpenseList