import React, { useState } from 'react'
import ExpenseForm from '../../components/ExpensesComponent/ExpenseForm'
import ExpenseList from '../../components/ExpensesComponent/ExpenseList'

const Expenses = () => {
  const [expenseData, setExpenseData] = useState([])

  const handleExpensesData = (data) => {
    //console.log(data)
    setExpenseData((prevExpenses)=> [...prevExpenses,data])
    //console.log(expenseData)
  }

  return (
    <div>
        <ExpenseForm onSaveExpense={handleExpensesData}/>
        <ExpenseList expenseData={expenseData}/>
    </div>
  )
}

export default Expenses