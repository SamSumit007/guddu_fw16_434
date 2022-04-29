import { ADD_TODO } from "./TodoAction";

const initialstate = {
  todos: [],
};

export const todoReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, payload],
      };
  }
};
