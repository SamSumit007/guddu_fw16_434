import React, { createContext, useContext, useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, settoken] = useState("");
  const [cartData, setcartData] = useState([]);
  const [signData, setsignData] = useState({});
  const Login = async () => {
    try {
      let res = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(signData),
      });
      let data = await res.json();
        // console.log("hello if",data);
        settoken(data.token)
    } catch (error) {
      console.log(error);
    }
  };
  const Logout = () => {
    settoken("");
  };
  return (
    <AuthContext.Provider
      value={{cartData, setcartData,token,Login,Logout,signData, setsignData}}
    >
      {children}
    </AuthContext.Provider>
  );
};




