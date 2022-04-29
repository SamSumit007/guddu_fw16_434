import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const RequireAuth=({children})=> {
  const token = useSelector((state) => state.isAuth.token);
  const navigate = useNavigate();
  console.log(token)

  if(token) return children
  return <h1>hello world</h1>
}