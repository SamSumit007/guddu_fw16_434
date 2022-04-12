// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Todos } from './sprint-2/day-1/we/Todos';


// let todos = [
//   { id:1, value:"React", completed:false},
//   { id:2, value:"Mern", completed:false},
//   { id:3, value:"babel", completed:true},
//   { id:4, value:"Vdom", completed:false},
// ]
function App() {
  return (
    <>
    <div className='App'>
      <Todos/>
    </div>
    </>
   
    
  );
}

export default App;
