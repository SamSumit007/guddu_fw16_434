import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {LoginDiv,L_child,L_inp} from '../Components/Style'

export const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.status?.from?.pathname || "/";
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username,
      password,
    };
if(username || password){
    axios
    .post("https://reqres.in/api/login", data)
    .then((r) => {
      // console.log(r.data.token);
      if (r.data.token) {
        //   dispatch(loginSucess(d.token)); //DISPATCH TOKEN WITH ACTION
        navigate(from, { replace: true }); //to redirect from where we camefrom
      }
    })
    .catch((e) => {
      console.log(e);
      navigate("/error");
    });
}

    setusername("");
    setpassword("");
  };

  return (
    <LoginDiv>
        <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <L_child>
          <label>Username</label>
          <br />
          <input
            type="text"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            placeholder="Enter username"
          />
        </L_child>
        <L_child>
          <label>Password</label>
          <br />
          <input
          placeholder="Enter password"
            type="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </L_child>
        <div>
          <L_inp  type="submit" value="Login" />
        </div>
      </form>
    </LoginDiv>
  );
};
