import React, { useContext, useRef, useState } from 'react'
import Input from '../../UI/Input'
import Button from "../../UI/Button"
import classes from "./ExpenseForm.module.css"
import { useDispatch } from 'react-redux'
import { expenseAction } from '../../store/expenseSlice'
import axios from 'axios'

const ExpenseForm = (props) => {
   // const expenseCtx = useContext(ExpenseContext)
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("Food")
    const dispatch = useDispatch()

    //console.log(expenseAction);

    const handlePriceChange = (event) => {
        setPrice(event.target.value)

    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }


    const handleCategoryChange = (event) => {
        setCategory(event.target.value)
    }



    const handleFormSubmit = (event) => {
      event.preventDefault();
      
      const expense = {
        price,
        category,
        description
      }

      addExpense(expense)

      setPrice("")
      setCategory("")
      setDescription("")

    
    }



    const addExpense = async(expense) =>{
        try{
          const response = await axios.post("https://expense-traker-f389d-default-rtdb.firebaseio.com/expenses.json", expense)
          const data = await response;
          
    
        }catch(err){
          console.log(err.message)
        }
    }






return (
    <div className={classes.container}>
        <h1>Expense Form</h1>
        <form onSubmit={handleFormSubmit}>
            <Input
            
            type="text"
            id="price"
            label="Price :"
            value={price}
            onChange={handlePriceChange}
            />
            
            <Input
            type="text"
            id="description"
            label="Description :"
            value={description}
            onChange={handleDescriptionChange}
            />
           <div className={classes.select}>
             <label >
                Category :
            <select value={category} onChange={handleCategoryChange}>
                <option  value="food">Food</option>
                <option value="petrol">Petrol</option>
                <option value="salary">Salary</option>
            </select>
            </label>
           </div>
           
           <Button type="submit">Add Expenses</Button>
        </form>
    </div>
  )
}

export default ExpenseForm