import React from 'react'
import {Link, Route} from "react-router-dom"
import Home from "./Home"
import { LoginPage } from './LoginPage'

function Routes() {
  return (
      <>
      <Link to="/">TASKS</Link>
      <Link to="/login">LOGIN</Link>
      <div>
            <Routes>
                <Route path='/'> <Home/> </Route>
            </Routes>
            <Route path='/login'> <LoginPage/></Route>
            <Route path=''><h3>Error</h3></Route>
      </div>
      </>
    
  )
}

export  {Routes}