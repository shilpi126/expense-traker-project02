import { createContext } from "react";


const AuthContext = createContext({
    token:'',
    user:{},
    login:(token) => {},
    isLoggedIn:false,
    getUserData: (token) => {},
    verifyEmailId : (token) => {},

})

export default AuthContext