import React,{createContext, useState} from 'react'

export const ThemeContext = createContext();

export const ThemeProvider=({children})=> {
    const [Theme, setTheme] = useState("white")
    
    const toggletheme =()=>{
        setTheme(Theme==="white" ? "black":"white")
    } 

  return (
   <ThemeContext.Provider value={[Theme,toggletheme]}>
       {children}
    </ThemeContext.Provider>
  )
};
