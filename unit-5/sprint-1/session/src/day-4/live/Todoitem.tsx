import React, { memo } from 'react'
import {Todo} from './Todo'

type TodoTogle = {
    handleTogle:(s:number) => void;
}

export const Todoitem = (props:Todo & TodoTogle) => {
    console.log("Rendering todoitem",props.title);

    const handleStatus = ()=>{
        props.handleTogle(props.id)
    }

  return (
    <div>{props.title} - {props.status ? "Done": "Notdone" }
    <button onClick={handleStatus}>Toggle</button>
    </div>
  )
}

export const MemoTodoItem = memo(Todoitem);

/*
function eq(prev,next){
    if(prev.id==next.id){
        return true;
    }
    return false;
}
*/