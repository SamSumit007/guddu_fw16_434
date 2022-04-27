import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo } from "./Redux/Action";

function TodoInput() {
  const [title, settitle] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    const payload = {
      title,
      status: false,
      id: uuid(),
    };
    const addTododAction = addTodo(payload);
    dispatch(addTododAction);
  };
  return (
    <div>
      <h1>TodoInput</h1>
      <div>
        <input
          type="text"
          value={title}
          placeholder="Enter Todo"
          onChange={(e) => settitle(e.target.value)}
        />
        <button onClick={handleAdd}>Add Todo</button>
      </div>
    </div>
  );
}

export default TodoInput;
