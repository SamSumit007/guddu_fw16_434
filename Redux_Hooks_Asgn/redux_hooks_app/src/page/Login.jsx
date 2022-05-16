import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import axios from "axios";
import { LoginDiv, L_child, L_inp, Inputtag } from "../Components/Style";
import { reqLogin } from "../Redux/Action";

export const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch()
  const {token, loginErr} = useSelector((state)=>state)
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.status?.from?.pathname || "/";
  useEffect(()=>{
    if(token){
       navigate(from, { replace: true }); //to redirect from where we camefrom
    }
  },[dispatch,token])

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username,
      password,
    };
    reqLogin(dispatch,data);
    setusername("");
    setpassword("");
  };

  if(loginErr) return <h1>404 Error (Wrong Username or Password)</h1>
  return (
    <LoginDiv>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <L_child>
          <Inputtag
            type="text"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            placeholder="Enter username"
          />
        </L_child>
        <L_child>
          <Inputtag
            placeholder="Enter password"
            type="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </L_child>
        <div>
          <L_inp type="submit" value="Login" />
        </div>
      </form>
    </LoginDiv>
  );
};
