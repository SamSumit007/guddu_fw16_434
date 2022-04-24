import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Sign_In from "./Sign_In"

function Login() {
  const navitage = useNavigate();

  return (
    <>
    <h1>Login</h1>
    <div style={{display:"flex", justifyContent:"space-between",padding:"20px", margin:"auto", width:"500px", border:"solid 1px"}}>
      <div style={{margin:"auto"}}>
      <Sign_In/>  
      <button onClick={()=>navitage("signup")}>Sign-Up</button>
      </div>
        
        
        <div >
          <Outlet/>
        </div>
    </div>
    </>
    
  )
}

export default Login