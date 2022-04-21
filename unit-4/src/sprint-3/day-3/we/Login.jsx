import React from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Google from "./Google";
import SignIn from "./SignIn";
import Signup from "./Signup";

function Login() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1>Login</h1>
        <button onClick={() => navigate("signin")}>Sign-in</button>
        <button onClick={() => navigate("signup")}>Sign-up</button>
        <button onClick={() => navigate("sign-in-google")}>
          Login-with Google
        </button>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Login;
