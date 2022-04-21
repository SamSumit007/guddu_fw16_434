import React, { useContext, useState } from "react";
import { AuthContext } from "./contexts/AuthProvider";

function LoginForm() {
  const [form, setform] = useState({});
  const { Login } = useContext(AuthContext);

  const handleChange = (e) => {
    const filed = e.target;
    setform({
      ...form,
      [filed.name]: filed.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    Login();
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Username</label>
            <input type="text" name="username" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input type="text" name="password" onChange={handleChange} />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
