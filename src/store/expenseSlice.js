import {createSlice} from "@reduxjs/toolkit"
import axios from "axios"


const initialExpenseState={
    expenses:[],
    premium:false,
    
}

const ExpenseSlice = createSlice({
    name:"expense",
    initialState:initialExpenseState,
    reducers:{
        

        getExpenses:(state, action) => {
            
            const data = action.payload;
            let amount = 0;
            for(const key in data){
                state.expenses.push({
                    id:key,
                    description:data[key].description,
                    price:data[key].price,
                    category:data[key].category,
                })

            amount+=+data[key].price;

            if(amount>10000){
                state.premium=true;
            }

            }

        },

        

    }

})


export const expenseAction = ExpenseSlice.actions;


export default ExpenseSlice.reducer;


