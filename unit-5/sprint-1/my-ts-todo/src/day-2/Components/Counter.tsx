import React, {  useState } from 'react'

type Counterprops={
    init?:number;
    children?:JSX.Element
}
export const Counter = (props:Counterprops) => {
    const {init =5,children} = props
    const [counter, setcounter] = useState(init)
  return (
    <div> <h3>
        Counter:{counter}
        </h3> 
    {children}
    <button onClick={()=>setcounter(counter+1)}>Increase</button>
    </div>
  )
}
