import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {decrement, increment} from "../counter/action"


function Counter() {
const counter = useSelector((state)=>state.count.count)
    const dispatch =useDispatch();
  return (

    <div>
        <h1>{counter}</h1>
        <button onClick={()=>dispatch(increment(5))}>Increment by 5</button>
        <button onClick={()=>dispatch(decrement(5))}>DEcrement by 5</button>
    </div>
  )
}

export default Counter