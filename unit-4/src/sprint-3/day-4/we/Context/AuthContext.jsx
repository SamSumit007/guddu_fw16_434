import React, { createContext, useContext, useState } from "react";

export const Authcontext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, settoken] = useState("");

  const login = async () => {
    let res = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      }),
    });
    let data = await res.json();
    settoken(data.token);
  };

  const logout = () => {
    settoken("");
  };
  return <Authcontext.Provider value={{token,login,logout}}>{children}</Authcontext.Provider>;
};
