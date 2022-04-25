import react, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { About } from "../pages/About";
import Books from "../pages/Books";
import { EditBookData } from "../pages/EditBookData";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Logout } from "../pages/Logout";
import { Navbar } from "../pages/Navbar";
import { SingleBook } from "../pages/SingleBook";
import { RequiredAuth } from "./RequiredAuth";

const Mainroutes = () => {
  const {divdata} = useContext(AuthContext)
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="login" element={<Login/>} />
          <Route path="logout" element={<Logout/>} />
          <Route path="books/*" element={
          <RequiredAuth>
          <Books/>
          </RequiredAuth>} >
          </Route>
          <Route path={`/books/${divdata}`} element={<SingleBook/>} />
          <Route path={`/books/${divdata}/edit`} element={<EditBookData />} />
          <Route path="about" element={<About/>} />
      </Routes>
    </>
  );
};
export default Mainroutes;
