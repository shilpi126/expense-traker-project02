import { createContext } from "react";


const ExpenseContext = createContext({
    expenses:[],
    addExpenses:(item) => {},
    getExpenses:() => {},
    error:null,
    isLoading:false,
    deleteExpense:(id) => {},
    editExpense:(id,item) => {},
})


export default ExpenseContext;