import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementCount, decrementCount } from './redux/action';

function Counter() {
    const count = useSelector((state)=>state.count);
    const dispatch = useDispatch();
  return (
    <div>
    <h1>Counter: {count}</h1>
    <div>
        <button onClick={()=>dispatch(incrementCount(1))} >INCREMENT</button>
        <button onClick={()=>dispatch(decrementCount(1))}>DECREMENT</button>
    </div>
    <div>
        <button onClick={()=>dispatch(incrementCount(5))} >INCREMENT+5</button>
        <button onClick={()=>dispatch(decrementCount(20))}>DECREMENT-20</button>
    </div>
    </div>
  )
}

export default Counter