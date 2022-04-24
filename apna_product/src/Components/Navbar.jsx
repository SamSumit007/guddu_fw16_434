import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./Contexts/AuthContext";
import styles from "./Styled/Style.module.css"

function Navbar() {
  const { cartData,token,Logout } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className={styles.navbarDiv} >
      <div><h2>Apna Bazar</h2></div>
      <div><h2>Search</h2></div>
      <div style={{display:"flex", justifyContent:"space-between", width:"350px"}}>
        <div >
          <Link to="/">Home</Link>
        </div>
        <div>{token?  <Link to="" onClick={Logout} >Logout</Link> :<Link to="/login">Login</Link>}
          
          {/* <button onClick={() => navigate("/login")}>Login</button> */}
        </div>
        <div>
          <Link to="/aboutus">About</Link>
        </div>
        <div>
          <Link to="/contactus">Contactus</Link>
        </div>
        <div>
          <Link to="/faq">FAQ</Link>
        </div>
        <div>
          <Link to="/cart">Cart {cartData.length}</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
