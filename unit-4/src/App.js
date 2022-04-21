// import logo from './logo.svg';
import React, { useContext, useEffect } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";

import Navbar from "./sprint-3/day-2/assignments/AuthContext/Navbar";
import { AuthContextProvider } from "./sprint-3/day-2/assignments/AuthContext/AuthContextProvider";
import LoginForm from "./sprint-3/day-2/assignments/AuthContext/LoginForm";
import Home from "./sprint-3/day-2/assignments/AuthContext/Home";

function App() {
const {isAuth} = useContext(AuthContextProvider)
  return (
    <>
      <div className="App">
      <Navbar/>
      {!isAuth ? <LoginForm/>:<Home/>}
      
      </div>
 
    </>
  );
}

export default App;
