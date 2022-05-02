import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../../redux/Counter/action";

export const Counter = () => {
  const counter = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <div className="App">
        <h1>counter:{counter}</h1>
        <button onClick={() => dispatch(increment(1))}>INC</button>
        <button onClick={() => dispatch(decrement(1))}>DEC</button>
        <button onClick={() => dispatch(reset())}>RESET</button>
      </div>
    </>
  );
};
