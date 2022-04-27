
import "./App.css";
import React, { useContext, useEffect, useState } from "react";
import Todods from "./sprint-4/day-2/assignments/Todods";
import { Route, Routes, useParams } from "react-router-dom";
import Todo from "./sprint-4/day-2/assignments/Todo";




function App() {
  const {id} = useParams()
  console.log(id)

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Todods/>}/>
          <Route path={`/todo/${id}`} element={<Todo/>}/>
        </Routes>
      
      </div>
    </>
  );
}

export default App;
