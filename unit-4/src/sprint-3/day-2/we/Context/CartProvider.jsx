import React,{createContext,useState} from 'react'

export const CartContext =createContext()

export default function CartProvider({children}) {
    const [value, setvalue] = useState(0);


    const addItemtoCart =()=>{
        setvalue(value+1)
    }

  return (
      <CartContext.Provider value={{value,setvalue,addItemtoCart}}>
          {children}
      </CartContext.Provider>
  )
}
