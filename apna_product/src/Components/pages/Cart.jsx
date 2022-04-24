import React, { useContext } from 'react'
import Product from '../Product'
import {AuthContext} from"../Contexts/AuthContext"

function Cart() {
  const {cartData, setcartData}=useContext(AuthContext)

  return (
    <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)",gap:"20px", margin:"auto 3%"}}>
      {cartData.map((elem)=>{
        return <Product key={elem.id} {...elem}/>
      })}
    </div>
  )
}

export default Cart