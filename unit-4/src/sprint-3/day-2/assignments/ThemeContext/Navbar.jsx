import React, { useContext, useState } from "react";
import { NavbarDiv } from "./Theme.styled";
import { ThemeContext } from "./ThemeProvider";

function Navbar() {
    const [Theme,toggletheme] = useContext(ThemeContext)
    const [isDarkMode, setisDarkMode] = useState(true)

  return (
    <NavbarDiv color={Theme}>
      <div>
        <h1 style={{ margin: "0px" }}>My Dashboard</h1>
      </div>
      <div>{Theme==="white" ? <button style={{ marginLeft: "20px" }} onClick={()=>toggletheme()}>
          Light Mode
        </button>:<button onClick={()=>toggletheme()}>Dark mode</button>}
        
        
      </div>
    </NavbarDiv>
  );
}

export default Navbar;
