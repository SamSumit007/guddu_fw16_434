import React,{createContext,useState} from 'react'

export const AuthContextProvider = createContext()

export const  AuthProvider=({children})=> {
  const [isAuth,setisAuth]= useState(false);

  const Login = ()=>{
    setisAuth(true)
  }
  const LoggedOut = ()=>{
    setisAuth(false)
  }
  return (
    <AuthContextProvider.Provider value={{isAuth,Login,LoggedOut}}>
        {children}
    </AuthContextProvider.Provider>
  )
}
