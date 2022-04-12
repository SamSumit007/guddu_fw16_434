import React, { useState } from 'react'

export const AddTodo = ({onAdd}) => {
    const [newTodo, setnewTodo] = useState("");
    
    
  return (
    <div>
        <input type="text" value={newTodo} name="todo" onChange={(e)=>setnewTodo(e.target.value)} />
        <button onClick={()=>{
            if(newTodo){
                onAdd(newTodo)
                setnewTodo("")
            }
           
        }}>Add Todo</button>
    </div>
  )
}
