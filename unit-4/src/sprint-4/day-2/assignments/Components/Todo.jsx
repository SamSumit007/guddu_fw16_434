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
        padding:"10px"
      }}

      onClick={()=>navigate(`/${id}`)}
    >
      <div>
        <h3 style={{ margin: "0px"}}>{todo}</h3>
      </div>
      <div>{status ? <p >Done</p> : <p></p>}</div>
    </div>    
  );
}

export default Todo;
