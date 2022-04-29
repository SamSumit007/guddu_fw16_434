import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Home({ children }) {
  const token = useSelector((state) => state.isAuth.token);
  console.log(token);

  if (token) return children;
  return (
    <h1>
      Please <Link to="/login">Login</Link> to Access Todos
    </h1>
  );
}
