import React, { useState } from 'react'
// import axios from 'axios'
import Input from '../../UI/Input'
import Button from "../../UI/Button"
import classes from "./ExpenseForm.module.css"



const ExpenseForm = (props) => {
   
   const [showExpenseForm, setShowExpenseForm] = useState(false)

    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("Food")
    // const dispatch = useDispatch()

 


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



    const addExpense = async(expense) => {
        try{
          const response = await fetch("https://rest-api-71236-default-rtdb.firebaseio.com/expenses.json", {
            method:"POST",
            body:JSON.stringify(expense),
          })
          const data = await response;
          console.log(data);
          
          
          
        }catch(err){
          console.log(err.message)
        }
    }


const handleAddExpenses = () => {
   setShowExpenseForm(true)
}



const handleCancleExpenses = () => {
  setShowExpenseForm(false)
}



return (
  
    <div className={classes.container}>
        {showExpenseForm ? <>
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
           
          <div className={classes["action-btn"]}>
          <Button type="submit">Add Expenses</Button>
          <Button type="submit" onClick={handleCancleExpenses}>Cancle</Button>
          </div>
        </form>
        </> :
        <div className={classes.btn}>
        <Button onClick={handleAddExpenses}>Add Expenses</Button>
        </div>
        }


    </div>
  )
}

export default ExpenseForm