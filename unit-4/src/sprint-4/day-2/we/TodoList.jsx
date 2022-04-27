import React from 'react'
import { useSelector } from 'react-redux'

function TodoList() {
    const todos = useSelector((state)=>state.todos)
  return (
    <div>
      <h1>Todo List</h1>
        {todos.map((elem)=> <div key={elem.id} >{elem.title}</div> )}
    </div>
  )
}

export default TodoList