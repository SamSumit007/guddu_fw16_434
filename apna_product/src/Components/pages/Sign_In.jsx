import React, { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import styles from "../Styled/Style.module.css";

function Sign_In() {
  const { token, Login, signData, setsignData } = useContext(AuthContext);
  const [formdata, setformdata] = useState({});
  const [isshow, setisshow] = useState(true);
  
  const show = () => {
    setisshow(isshow === false ? true : false);
  };

  const handleChange = (e) => {
    const Name = e.target;
    setformdata({
      ...formdata,
      [Name.name]: Name.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    setsignData(formdata);
    Login()
  };

  return (
    <div className={styles.signinformDiv}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputDiv}>
          <label>Username</label>
          <br />
          <input
            type="text"
            placeholder="Enter username"
            name="username"
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputDiv}>
          <label>Password</label>
          <br />
          <input
            type={isshow ? "password" : "text"}
            placeholder="Enter password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputDiv}>
          <label> Show Password</label>
          <input type="checkbox" name="show" onChange={show} />
        </div>
        <div style={{ margin: "20px" }}>
          <input id={styles.submit} type="submit" value={"Sign IN"} />
        </div>
      </form>
    </div>
  );
}

export default Sign_In;
