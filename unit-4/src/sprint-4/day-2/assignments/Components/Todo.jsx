import React from "react";
import { useNavigate } from "react-router-dom";


function Todo({ todo, id, status }) {
  const navigate = useNavigate();

  return (
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

      onClick={()=>navigate(`/todo/${id}`)}
    >
      <div style={{ padding: "10px" }}>
        <h3 style={{ margin: "0px", display: "inline-block" }}>{todo}</h3>
        {status ? <p style={{ display: "inline" }}>Done</p> : <p></p>}
      </div>
    </div>

    //   </Link>
    
  );
}

export default Todo;
