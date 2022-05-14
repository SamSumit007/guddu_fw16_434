import React from 'react'
import {Route,Routes} from 'react-router-dom'
import { AddSubTask } from '../Components/AddSubTask'
import { Error404 } from '../page/Error404'
import { Home } from '../page/Home'
import { Login } from '../page/Login'
import { NewTask } from '../page/NewTask'

export const MainRoutes = () => {
  return (
      <>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='login' element={<Login/>}></Route>
          <Route path='error' element={<Error404/>}></Route>
          <Route path='addSubtask' element={<AddSubTask/>}></Route>
          <Route path='newtask' element={<NewTask/>}></Route>
      </Routes>
      </>
    
  )
}
