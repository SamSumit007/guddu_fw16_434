import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { comleteTodo, deleteTodo } from "./Redux/action";

function Todo({ todo, id, status }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    deleteTodo(dispatch, id);
  };
  const handlecomplete = () => {
    console.log("complete");
    comleteTodo(dispatch, id);
  };
  return (
    //   <Link to={`/todo/${id}`} >
          <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "50%",
        border: "solid black 1px",
        backgroundColor: "aquamarine",
        margin: "10px auto",
      }}
    >
      <div style={{ padding: "10px" }}>
        <h3 style={{ margin: "0px", display: "inline-block" }}>{todo}</h3>
        {status ? <p style={{ display: "inline" }}>Done</p> : <p></p>}
      </div>
      <div>
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "5px 10px",
            margin: "10px",
          }}
          onClick={handlecomplete}
        >
          COMPLETE
        </button>
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "5px 10px",
            margin: "10px",
          }}
          onClick={handleDelete}
        >
          DELETE
        </button>
      </div>
    </div>

    //   </Link>
    
  );
}

export default Todo;
