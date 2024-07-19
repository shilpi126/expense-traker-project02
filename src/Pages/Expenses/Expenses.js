import React, { useState } from 'react'
import ExpenseForm from '../../components/ExpensesComponent/ExpenseForm'
import ExpenseList from '../../components/ExpensesComponent/ExpenseList'
import EditExpenseForm from '../../components/ExpensesComponent/EditExpenseForm'

const Expenses = () => {
  const [editData, setEditData] = useState()
  const [isEdit,setIsEdit] = useState(false)

  const handleEditData = (isEdit,item) => {
    //console.log(isEdit,item)
    setIsEdit(isEdit)
    setEditData(item)
  }



  return (
    <div>
      {editData ?  <EditExpenseForm  editData={editData}/> :   <ExpenseForm />}
       
       
        <ExpenseList onEditData={handleEditData}/>
    </div>
  )
}

export default Expenses