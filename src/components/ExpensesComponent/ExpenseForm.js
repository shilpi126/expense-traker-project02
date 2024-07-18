import React, { useContext, useState } from 'react'
import Input from '../../UI/Input'
import Button from "../../UI/Button"

import classes from "./ExpenseForm.module.css"
import ExpenseContext from '../../store/expense-context'
const ExpenseForm = (props) => {
    const expenseCtx = useContext(ExpenseContext)
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("Food")
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
       expenseCtx.addExpenses(expense)
      //console.log(price, description, category)


    //   props.onSaveExpense(expense)
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