import React from "react";
import Signup from "./Pages/Signup/Signup"
import Login from "./Pages/Login/Login";
import { Route, Routes } from "react-router-dom";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Profile/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      
      </Routes>
    </div>
  );
}

export default App;
