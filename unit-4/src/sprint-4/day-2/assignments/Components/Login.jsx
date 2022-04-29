import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginSucess } from "../Auth/action";
import styled from "styled-components"

const Inputbox=styled.input`
width: 40%;
padding: 5px;
font-size: 18px;
background-color: aquamarine;
margin: 10px;
`;

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  // redirectoncelogin sucess
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  // *****************

  const dispatch = useDispatch();

  const handlesubmit = (e) => {
    e.preventDefault();
    const payload = { email, password };
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((r) => r.json())
      .then((d) => {
        if (d.token) {
          dispatch(loginSucess(d.token)); //DISPATCH TOKEN WITH ACTION
          navigate(from, { replace: true }); //to redirect from where we camefrom
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <h3>Enter Login Details</h3>
      <div>
        <form onSubmit={handlesubmit}>
          <Inputbox
            type="text"
            value={email}
            placeholder="Enter Email ID"
            onChange={(e) => setemail(e.target.value)}
          />
          <br />
          <Inputbox
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <br />
          <Inputbox  style={{
            backgroundColor: "black",
            color: "white"}} type="submit" />
        </form>
      </div>
    </>
  );
}

export { Login };
