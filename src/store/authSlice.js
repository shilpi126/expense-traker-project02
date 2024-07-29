
import { createSlice } from "@reduxjs/toolkit";


const initialToken = JSON.parse(localStorage.getItem("token"));

const initialState = {
    token:initialToken,
    user:[],
    isLoggedIn: initialToken ? true : false,
}



const AuthSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login(state,action){
            state.token = action.payload;
            state.isLoggedIn = true;
            localStorage.setItem("token", JSON.stringify(action.payload))

        },


        logout(state,action){
            state.token = null;
            state.isLoggedIn=false;
            localStorage.removeItem("token")
            
            
        },
        
        register(state,action){

        },
    }


})

export const authAction = AuthSlice.actions;

export default AuthSlice.reducer;