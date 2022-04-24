import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import  {AuthContext}  from "./AuthContext";

export const RequiredAuth = ({ children }) => {
  const { token } = useContext(AuthContext);
  const location = useLocation();
  console.log(token)

  if(token) return children;
  return <Navigate to="/login" state={{ from: location }} replace />
};

