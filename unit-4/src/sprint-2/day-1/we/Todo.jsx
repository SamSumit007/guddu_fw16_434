import React from 'react'
import styles from "./Todo.module.css"

export const Todo = ({todo}) => {
  return (
      <>
      <div className= {styles.container}>
      <div><input type="checkbox"/></div>
      <div className={todo.completed ? styles.linethrough:"none"}>{todo.value}</div>
    
      </div>
      
      </>
  )
}
