import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

type Todo = {
  id: string;
  title: string;
  status: boolean;
};

export const Todos = () => {
  const [text, settext] = useState<string>("");
  const [todos, settodos] = useState<Todo[]>([]);
  useEffect(()=>{
getData();
  },[])

  const handleAdd = () => {
    const payload = {
      id: uuid(),
      title: text,
      status: false,
    };
    axios
      .post("http://localhost:8080/todos", payload)
      .then((r) => getData())
      .catch((e) => console.log(e));


    // settodos([
    //   ...todos,
    //   {
    //     id: uuid(),
    //     title: text,
    //     status: false,
    //   },
    // ]);
  };

  const getData = () => {
    axios("http://localhost:8080/todos")
      .then((r) =>{
        
        console.log(r.data)
        settodos(r.data)
      } )
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Enter Todos"
        onChange={(e) => settext(e.target.value)}
      />
      <button onClick={handleAdd}>Add todos</button>
      <div>
        {todos.map((item) => (
          <div key={item.id}>
            {item.title}-{item.status ? "Done" : "Pending"}
          </div>
        ))}
      </div>
    </div>
  );
};
