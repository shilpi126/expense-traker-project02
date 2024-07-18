import { createContext } from "react";


const ExpenseContext = createContext({
    expenses:[],
    addExpenses:(item) => {},
    getExpenses:() => {},
    error:null,
    isLoading:false,
})


export default ExpenseContext;