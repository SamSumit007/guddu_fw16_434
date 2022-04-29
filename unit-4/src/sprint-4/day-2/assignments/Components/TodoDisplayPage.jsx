import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { comleteTodo, deleteTodo } from "../Redux/action";
import { useLocation, useNavigate } from "react-router-dom";

export default function TodoDisplayPage() {
  const [todo, settodo] = useState({});
  const { id } = useParams();

  // redirectoncelogin sucess
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  // *****************

  useEffect(() => {
    fetch(`  http://localhost:8080/todos/${id}`)
      .then((r) => r.json())
      .then((d) => settodo(d))
      .catch((e) => console.log(e));
  }, [todo]);

  const dispatch = useDispatch();
  const handleDelete = () => {
    deleteTodo(dispatch, id);
    navigate(from, { replace: true }); //to redirect from where we camefrom
  };
  const handlecomplete = () => {
    comleteTodo(dispatch, id);
  };

  return (
    <div>
      <h3 style={{ backgroundColor: "black", color: "white", padding: "10px" }}>
        MARK AS COMPLETE OR DELETE TODO
      </h3>
      <h2>{todo.todo} {todo.status ? ": Complete" : ": Not Complete"}</h2>
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
  );
}
