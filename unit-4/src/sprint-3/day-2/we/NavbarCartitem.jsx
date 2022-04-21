import React,{useContext} from 'react'
import { CartContext } from "./Context/CartProvider";
import { Border } from './Context/Border.styled';

export default function NavbarCartitem() {
  const {value} = useContext(CartContext)
  return (
    <Border>NavbarCartitem:{value}</Border>
  )
}
