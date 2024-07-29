import React, { useContext } from "react";
import Signup from "./Pages/Signup/Signup"
import Login from "./Pages/Login/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import Profile from "./Pages/Profile/Profile";
//import AuthContext from "./store/auth-context";
import User from "./Pages/User/User";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import Expenses from "./Pages/Expenses/Expenses";
import { useSelector } from "react-redux";
import ProfileHeader from "./components/ProfileHeader";

function App() {

  const isAuth = useSelector((state) => state.auth)

//console.log(isAuth)
  return (
    <div>
    <ProfileHeader/>
      <Routes>
    
      <Route path="/" element={isAuth.isLoggedIn ? <Expenses/> : <Navigate to="/login"/>}/>

      {!isAuth.isLoggedIn && <Route path="/login" element={<Login/>}/>}
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
