import React,{createContext,useState} from 'react'

export const AuthContext = createContext()

export const  AuthProvider=({children})=> {
  const [isLoggedIn,setisLoggedIn]= useState(false);

  const Login = ()=>{
    setisLoggedIn(true)
  }
  const LoggedOut = ()=>{
    setisLoggedIn(false)
  }
  return (
    <AuthContext.Provider value={{isLoggedIn,Login,LoggedOut}}>
        {children}
    </AuthContext.Provider>
  )
}

