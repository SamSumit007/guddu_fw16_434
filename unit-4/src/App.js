// import logo from './logo.svg';
import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import CreditCard from "./sprint-3/day-1/assignments/CreditCard/CreditCard";
import CreditCardForm from "./sprint-3/day-1/assignments/CreditCard/CreditCardForm";
import Navbar from "./sprint-3/day-2/assignments/ThemeContext/Navbar";
import Dashboard from "./sprint-3/day-2/assignments/ThemeContext/Dashboard";


function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      <Dashboard/>
    </div>

      
    </>
  );
}

export default App;
