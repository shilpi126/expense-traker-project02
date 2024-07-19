

import React, { useContext, useRef, useState } from 'react'
import Input from '../../UI/Input'
import Button from "../../UI/Button"

import classes from "./ExpenseForm.module.css"
import ExpenseContext from '../../store/expense-context'
const EditExpenseForm = (props) => {
    const expenseCtx = useContext(ExpenseContext)
    const [price, setPrice] = useState(props.editData.price)
    const [description, setDescription] = useState(props.editData.description)
    const [category, setCategory] = useState(props.editData.category)
    
  

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
        const  id=props.editData.id;
        const expense = {
        
        price,
        category,
        description
        }

        console.log(expense)
        expenseCtx.editExpense(id,expense)
        setPrice("")
        setCategory("")
        setDescription("")
    }


return (
    <div className={classes.container}>
        <h1>Edit Expense Form</h1>
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
           
           <Button type="submit">Edit Expenses</Button>
        </form>
    </div>
  )
}
export default EditExpenseForm
