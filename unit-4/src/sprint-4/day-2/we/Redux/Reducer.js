import { localdata, savedata } from "../utils/localStorage";
import { ADD_TODO } from "./ActionType";

const initstate = {
  todos: localdata("todo")||[]
};

export const reducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      const updateTodo = [...state.todos, payload];
      savedata("todos", updateTodo)
      return {
        ...state,
        todos: updateTodo
      };
    }
    default:
      return state;
  }
};
