import React from "react";

const TodoItem=(props)=>{
    console.log(props)
    const {title,status,id,handleRemove,isHidden} = props
    if(isHidden){
        return null
    }
    return (
        <>
        <h1>{title}</h1>
        <button onClick={()=>handleRemove(id)}>Delete</button>
        </>
    )
}

export default TodoItem