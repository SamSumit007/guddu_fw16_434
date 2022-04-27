import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodods } from "./Redux/action";
import Todo from "./Todo";
import TodoInput from "./TodoInput";
import { Link } from "react-router-dom";

function Todods() {
  const { isLoading, isError, data } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    getTodods(dispatch);
  }, []);

  if (isError) return <h1>Error occured while loading</h1>;
  return (
    <div>
      <div>
        <TodoInput />
      </div>
      <div>
        <h1>Total Number of Todos: {data.length}</h1>
        <div>
          {data.map((elem) => (
            <Todo key={elem.id} {...elem} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todods;
