
import "./App.css";
import React, { useContext, useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { MainRoutes } from "./sprint-4/day-2/assignments/Components/MainRoutes";




function App() {


  return (
    <>
      <div className="App">
       <MainRoutes/>
      </div>
    </>
  );
}

export default App;
