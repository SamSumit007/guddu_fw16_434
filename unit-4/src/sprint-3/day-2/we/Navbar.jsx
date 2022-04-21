import React, { useContext } from "react";
import { Border } from "./Context/Border.styled";
import { CartContext } from "./Context/CartProvider";
import { ThemeContext } from "./Context/ThemeProvider";
import NavbarCartitem from "./NavbarCartitem";

export default function Navbar() {
  const [Theme,toggletheme] = useContext(ThemeContext)
  
  return (
    <Border color={Theme}>
      <div>
        {Theme}:<button onClick={toggletheme}>Toggle Theme</button>
      </div>
      
      Navbar:
      <NavbarCartitem />
    </Border>
  );
}
