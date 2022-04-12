import {nanoid} from "nanoid"
import { useState } from "react"
import TodoItem from "./TodoItem"

const TodoList=() => {
    const [task, setTask] = useState("")
    const [todo, setTodo] = useState([])
    const [isloggedin, setLoggedIn] = useState(false)
    const [isloading, setLoading] = useState(false)
    const handleChange = (e)=>{
        setTask(e.target.value)
    }
    const handleClick=()=>{
        let taskObj={
            id:nanoid(),
            title:task,
            status:false
        }
        setTodo([taskObj,...todo])
    };
    const handleDelete=(id)=>{
            console.log(id)
            let newTodo = todo.filter((item)=> item.id!=id)
            setTodo(newTodo)
    }
    const handleLoggedIn=()=>{
        setLoggedIn(true)
    }
    const handleLoggedOut=()=>{
        setLoggedIn(false)
    }
    // if(!isloggedin){
    //     return <h1>user not logged in <button onClick={handleLoggedIn}>Login</button></h1>
    // }
    return (
        <>
        {isloading && <h2>Loading.......</h2> }
           <>
        {isloggedin ? (<><button onClick={handleLoggedOut}>Logout</button>
        <input type="text" onChange={handleChange} value={task} placeholder="enter task"/>
        <button onClick={handleClick}>Add todo</button>
        {todo.length ? (todo.map((item,index)=>{
               return <TodoItem key={item.id} handleRemove={handleDelete} {...item} isHidden = {index%2} />
        })): 
        (<h1>No Todo's Exist</h1>) }</>) : 
        (<h1>User Have't LoggedIn <button onClick={handleLoggedIn}>Login</button></h1>)}
      
        </>
        </>
     
    )
}

export default TodoList