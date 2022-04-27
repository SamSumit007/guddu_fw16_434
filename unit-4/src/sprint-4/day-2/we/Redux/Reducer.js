import { ADD_TODO } from "./ActionType";

const initstate = {
  todos: [
    {
      id: 1,
      title: "Buy Milk",
      status: false,
    },
    { id: 2, title: "Buy Brad", status: false },
  ],
};

export const reducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    }
    default:
      return state;
  }
};
