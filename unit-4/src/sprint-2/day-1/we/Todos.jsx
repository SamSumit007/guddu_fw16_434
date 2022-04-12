import React, { useState } from 'react'
import { AddTodo } from './AddTodo'
import { Todo } from './Todo'


export const Todos = () => {
    const [todos,settodos] = useState([]);

    const onAdd=(newTodo)=>{
        settodos([
            ...todos,
            {
                id:todos.length+1,
                value:newTodo,
                completed:false
            }
        ])
    }
  return (
    <div>
        <h1>Add Todos</h1>
    <AddTodo onAdd={onAdd}/>
    {todos.map(todo=><Todo key={todo.id}  todo = {todo}/>)}
    </div>
  )
}
