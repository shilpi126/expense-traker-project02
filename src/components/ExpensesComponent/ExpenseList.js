import React, { useContext, useEffect, useState } from 'react'
import classes from "./ExpenseList.module.css"
//import ExpenseContext from '../../store/expense-context'
import Button from "../../UI/Button"
import axios from 'axios'
import { expenseAction } from '../../store/expenseSlice'
import { useDispatch, useSelector } from 'react-redux'
import Activateprimium from '../ActivatePrimium/Activateprimium'



const ExpenseList = (props) => {
  const expenseData = useSelector((state)=>state.expense)
  const dispatch= useDispatch()

  console.log(expenseData)
  //const expenseCtx = useContext(ExpenseContext)
  // const [isEdit, setIsEdit] = useState(false)

  const getExpenseData = async() => {
    
    
      //setError(null)
      try{
          //setIsLoading(true)
              const response = await axios.get("https://rest-api-71236-default-rtdb.firebaseio.com/expenses.json")
              
              const data = await response.data;
              dispatch(expenseAction.getExpenses(data))

              
      }catch(err){
        
          console.log(err.message)
      }
      
      //setIsLoading(false)
  

  }

  useEffect(()=>{
      getExpenseData()
  },[])



  const handleEditExpense = (event) => {
    
    const id = event.target.id;
    //const editItem = expenseCtx.expenses.find((item) => item.id == id)
    
    //props.onEditData(true,editItem)
    
    //expenseCtx.deleteExpense(id);
    
  }

  const handleDeleteExpense = (event) => {
    
    //expenseCtx.deleteExpense(event.target.id)
  }




  return (
    

    <div className={classes.container}>

    <ul className={classes.ul}>
      {/* {expenseData.isLoading && <p>Loading...</p>}
      {expenseCtx.error && expenseCtx.error} */}
       {/* {expenseData === null && <p style={{color:"orange"}}>Expenses not found...</p>} */}
      {!expenseData && <p>Expenses not found...</p>}
      {expenseData.premium 
      ? 
      <Activateprimium/> 
      : 
      
      (
            expenseData.expenses.map((item,index)=>(
            <li key={index+1}>
            <p>{item.price}</p>
            <p>{item.description}</p>
            <p>{item.category}</p>
            <div className={classes.action}>
            <Button id={item.id} type="button" onClick={handleEditExpense}>Edit</Button>
            <Button id={item.id} type="button" onClick={handleDeleteExpense}>Delete</Button>
            </div>
            </li>
            
      ))
      
      )}

     
      </ul>
      
    </div>
    
    
  )
}

export default ExpenseList