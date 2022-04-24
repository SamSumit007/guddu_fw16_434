// import logo from './logo.svg';
import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import CreditCard from "./sprint-3/day-1/assignments/CreditCard/CreditCard";
import CreditCardForm from "./sprint-3/day-1/assignments/CreditCard/CreditCardForm";
import Navbar from "./sprint-3/day-2/assignments/ThemeContext/Navbar";
import Dashboard from "./sprint-3/day-2/assignments/ThemeContext/Dashboard";

import Home from "./sprint-3/day-4/we/Pages/Home";
import Login from "./sprint-3/day-4/we/Pages/Login";
import X from "./sprint-3/day-4/we/Pages/X";
import { Authcontext } from "./sprint-3/day-4/we/Context/AuthContext";
import { RequiredAuth } from "./sprint-3/day-4/we/Context/RequiredAuth";

function App() {

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route
            path="X"
            element={
              <RequiredAuth>
                <X />
              </RequiredAuth>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
