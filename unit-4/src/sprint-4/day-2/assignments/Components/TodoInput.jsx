import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo } from "../Redux/action";
import styled from "styled-components"

const Inputbox=styled.input`
width: 40%;
padding: 5px;
font-size: 18px;
background-color: aquamarine;
margin: 10px;
`;

function TodoInput() {
  const [todo, settodo] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if(todo){
      const payload = {
        todo,
        status: false,
        id: uuid(),
      };
      addTodo(dispatch, payload);
    }
   
    
  };
  return (
    <div>
      <h1>TodoInput</h1>
      <div>
        <Inputbox
          type="text"
          value={todo}
          placeholder="Enter Todo"
          onChange={(e) => settodo(e.target.value)}
        />
        <button style={{
            backgroundColor: "black",
            color: "white",padding: "5px", fontSize:"18px"}} onClick={handleAdd}>Add Todo</button>
      </div>
    </div>
  );
}

export default TodoInput;
