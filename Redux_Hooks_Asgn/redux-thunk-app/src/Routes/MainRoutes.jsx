import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../components/dashboard";
import { Login } from "../components/Login";
import { Register } from "../components/Register";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/" element={<Register />}></Route>
      <Route path="login" element={<Login />}></Route>
    </Routes>
  );
};
