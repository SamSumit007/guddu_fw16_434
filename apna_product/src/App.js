import "./App.css";

import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/pages/Home";
import AboutUs from "./Components/pages/AboutUs";
import ContactUS from "./Components/pages/ContactUS";
import FAQ from "./Components/pages/FAQ";
import Login from "./Components/pages/Login";
import Sign_In from "./Components/pages/Sign_In";
import Sign_up from "./Components/pages/Sign_up";
import Cart from "./Components/pages/Cart";
import { useContext, useEffect } from "react";
import { AuthContext } from "./Components/Contexts/AuthContext";
import { RequiredAuth } from "./Components/Contexts/RequiredAuth";

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUS />} />
        <Route path="/faq" element={<FAQ />} />
        <Route
          path="/cart"
          element={
            <RequiredAuth>
              <Cart />
            </RequiredAuth>
          }
        />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="login/*" element={<Login />}>
          <Route path="signin" element={<Sign_In />} />
          <Route path="signup" element={<Sign_up />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
