import React, { useRef, useState } from 'react'

let x=0
export const Counter = () => {
    const [count, setcount] = useState(0);
    const refX = useRef(0);

    console.log("value of x", refX.current )
    
  return (
    <div>
        <h1>Counter</h1>
        <h1>count: {count}</h1>
        <button onClick={()=>{
            setcount(count+1)
            refX.current=refX.current+1
            console.log("new value of x", x)
        }}>increment</button>
        <button onClick={()=>{
          refX.current=refX.current+1
          console.log(refX.current)

        }}>Change X</button>
    </div>
  )
}
