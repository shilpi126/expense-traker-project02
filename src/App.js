import React, { useContext } from "react";
import Signup from "./Pages/Signup/Signup"
import Login from "./Pages/Login/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import Profile from "./Pages/Profile/Profile";
import AuthContext from "./store/auth-context";
import User from "./Pages/User/User";

function App() {
  const authCtx = useContext(AuthContext)



  return (
    <div>
      <Routes>
      

      <Route path="/" element={authCtx.isLoggedIn ? <Profile/>: <Navigate to="/login"/> }/> 
      {!authCtx.isLoggedIn && <Route path="/login" element={<Login/>}/>}
      <Route path="/signup" element={<Signup/>}/>
      <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
