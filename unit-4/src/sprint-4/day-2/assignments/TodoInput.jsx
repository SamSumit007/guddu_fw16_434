import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo } from "./Redux/action";

function TodoInput() {
  const [todo, settodo] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    const payload = {
      todo,
      status: false,
      id: uuid(),
    };
    addTodo(dispatch, payload);
  };
  return (
    <div>
      <h1>TodoInput</h1>
      <div>
        <input
          type="text"
          value={todo}
          placeholder="Enter Todo"
          onChange={(e) => settodo(e.target.value)}
        />
        <button onClick={handleAdd}>Add Todo</button>
      </div>
    </div>
  );
}

export default TodoInput;
