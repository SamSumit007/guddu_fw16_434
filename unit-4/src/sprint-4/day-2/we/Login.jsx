import React, { useState } from "react";

function Login({handleLogin}) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    const payload = {email,password}
    handleLogin(payload)
    
  };

  return (
    <>
      <h3>Login form</h3>
      <div>
        <form onSubmit={handlesubmit}>
          <input
            type="text"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    </>
  );
}

export  {Login};
