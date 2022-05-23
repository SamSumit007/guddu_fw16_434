import React, { useState } from 'react'

export const Addbutton = () => {
    const [cartNo, setCartNo]=useState(0)

    if(cartNo!=0) return <div>Already added</div>
  return (
    <div><button onClick={()=>setCartNo(cartNo+1)}>Add to cart</button></div>
  )
}
