import { createContext } from "react";


const AuthContext = createContext({
    token:'',
    user:{},
    login:(token) => {},
    isLoggedIn:false,
    getUserData: (token) => {},
    verifyEmailId : (token) => {},
    logout:() => {}

})

export default AuthContext