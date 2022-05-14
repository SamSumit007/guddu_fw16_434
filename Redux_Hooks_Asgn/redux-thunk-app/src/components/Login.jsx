import React, { useEffect, useState } from "react";
import styles from "./styles/Register.module.css";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

export const Login = () => {
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");
  const { gitRepo, isLoadding, isError, token, user, loginerr } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("before", token, user);
    if (token && user) {
      console.log("before", token, user);
      navigate("/dashboard");
    }
  }, [dispatch, token, user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const logindata = {
      password,
      username,
    };
    login(dispatch, logindata);
  };

  if (loginerr) return <h1>Wrong credencial try again</h1>;
  return (
    <div className={styles.outerdiv}>
      <h1 id={styles.heading}>User Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.inp}
          type="text"
          value={username}
          placeholder="Enter username"
          onChange={(e) => setusername(e.target.value)}
        />
        <br />
        <input
          className={styles.inp}
          type="password"
          value={password}
          placeholder="Enter password"
          onChange={(e) => setpassword(e.target.value)}
        />
        <br />
        <input className={styles.button} type="submit" value="Login" />
      </form>
      <h3 id={styles.heading}>
        Click here if not register <Link to="/">Register</Link>{" "}
      </h3>
    </div>
  );
};
