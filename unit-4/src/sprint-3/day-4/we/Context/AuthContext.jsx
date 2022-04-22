import React,{ createContext,useContext} from "react";

export const Authcontext = useContext();


export const AuthProvider=({Children})=>{
    return <Authcontext.Provider>
        {Children}
    </Authcontext.Provider>
}