import { ADD_TODO } from "./ActionType"


export const addTodo= (payload)=>{
    return {
        type:ADD_TODO,
        payload
    }

}