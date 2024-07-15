import { createContext } from "react";


const AuthContext = createContext({
    token:'',
    user:{},
    login:(token) => {},

})

export default AuthContext