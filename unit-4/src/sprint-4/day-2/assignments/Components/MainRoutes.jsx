import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Login";
import Todods from "./Todods";
import Home from "./Home";
import TodoDisplayPage from "./TodoDisplayPage";

function MainRoutes() {

  return (
    <>
      <Routes>
        <Route path="/*" element={
            <Home>
              <Todods />
            </Home>
          }
        />
        <Route path="login" element={<Login />} />
          <Route path="/:id" element={<TodoDisplayPage />} />
      </Routes>
    </>
  );
}

export { MainRoutes };
