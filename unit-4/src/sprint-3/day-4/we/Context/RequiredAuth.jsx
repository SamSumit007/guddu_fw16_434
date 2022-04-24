import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Login from "../Pages/Login";
import { Authcontext } from "./AuthContext";

export const RequiredAuth = ({ children }) => {
  const { token } = useContext(Authcontext);
  const location = useLocation();

  if(token) return children;
  return <Navigate to="/login" state={{ from: location }} replace />
};
