import React,{ useContext } from 'react'
import {CartContext} from "./Context/CartProvider"
import { Border } from './Context/Border.styled'

function Cart() {
  const {addItemtoCart} = useContext(CartContext)
  return (
    <Border>Cart
        <button onClick={addItemtoCart} >Add to cart</button>
    </Border>
  )
}

export default Cart