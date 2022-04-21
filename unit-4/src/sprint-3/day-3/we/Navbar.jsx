import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        padding: "15px",
        color: "white",
        backgroundColor: "Aquamarine",
        display: "flex",
      }}
    >
      <div>
        <Link to="/home">Home</Link>
      </div>
      <div>
        {/* <Link to="/login">Login</Link> */}
        <button onClick={() => navigate("/login")}>Login</button>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/counter">Counter</Link>
      </div>
      <div>
        <Link to="/products">Products</Link>
      </div>
    </div>
  );
}

export default Navbar;
