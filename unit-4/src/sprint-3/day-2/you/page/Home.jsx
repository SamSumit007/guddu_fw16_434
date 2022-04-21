import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'

function Home() {
    const {LoggedOut} =useContext(AuthContext)

  return (
    <div><h1>Home</h1>
    <button onClick={LoggedOut}>Logout</button>
    </div>
  )
}

export default Home