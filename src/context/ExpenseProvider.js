import React, { useEffect, useState } from 'react'
import ExpenseContext from './expense-context'
import axios from 'axios';


const ExpenseProvider = (props) => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    const [expenses, setExpenses] = useState([]);
    
    const addDataToExpenses = async(item) => {

        //console.log(item)
        try{
            const response = await axios.post("https://expense-traker-f389d-default-rtdb.firebaseio.com/expenses.json",item)
            console.log(response)
            //const data = await response;
            
            //console.log(data)
            setExpenses((prevExpenses) => [...prevExpenses,item])

        }catch(err){
            console.log(err.message)
        }
    }


    

    const getDataFromExpenses = async() => {
        setError(null)
        try{
            setIsLoading(true)
                const response = await axios.get("https://expense-traker-f389d-default-rtdb.firebaseio.com/expenses.json")
                
                const data = await response.data;
                
                let expenseArray = [];

                for(const key in data){
                    expenseArray.push({
                        id:key,
                        description:data[key].description,
                        price:data[key].price,
                        category:data[key].category,
                    })
                }

                
                setIsLoading(false)
                setExpenses(expenseArray)
        }catch(err){
            setError(err.message)
            console.log(err.message)
        }
        
        setIsLoading(false)
    }


    const editExpenseData = async(id, item) => {

        try{

        const response = await axios.put(`https://expense-traker-f389d-default-rtdb.firebaseio.com/expenses/${id}.json`,item)
        
        const data = await response.data;

        //console.log(data)

        const updatedData = expenses.map((expense) => expense.id === id 
        ? {...expense, price:data.price, description:data.description, category:data.category}
        : expense
        );
        
        
        setExpenses(updatedData)
        
    }catch(err){
        console.log(err.message)
    }
}


    const deleteExpenseData = async(id) => {
        console.log(id)
        try{
            const response = await axios.delete(`https://expense-traker-f389d-default-rtdb.firebaseio.com/expenses/${id}.json`)
            console.log(response)
            const data = await response.data;
            
            const findData = document.getElementById(id)

            // const dataToBeDeleted = findData.parentElement.parentElement.parentElement.remove();
            

            const dataToBeDeleted = expenses.filter((expense) => expense.id !== id );
            setExpenses(dataToBeDeleted)

        }catch(err){
            console.log(err.message)
        }
    }




    useEffect(() => {
        getDataFromExpenses()
    },[])

    const expenseValue = {
        expenses:expenses,
        addExpenses: addDataToExpenses,
        getExpenses: getDataFromExpenses,
        deleteExpense: deleteExpenseData,
        editExpense: editExpenseData,
        error,
        isLoading,
        
    }  
 
 return (
    <ExpenseContext.Provider value={expenseValue}>{props.children}</ExpenseContext.Provider>
 )
}

export default ExpenseProvider