import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  GET_TODOS_ERROR,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from "./actionType";

const initialState={
  todos:{
      isloading:false,
      isError:false,
      data:[],
  }
}

export const reducer = (state=initialState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST: {
      return {
        ...state,
        todos: {
          isLoading: true,
          isError: false,
          data: [],
        },
      };
    }
    case GET_TODOS_ERROR: {
      return {
        ...state,
        todos: {
          isLoading: false,
          isError: true,
          data: [],
        },
      };
    }
    case GET_TODOS_SUCCESS: {
      return {
        ...state,
        todos: {
          isLoading: true,
          isError: false,
          data: action.payload,
        },
      };
    }
    case DELETE_TODO: {
      return {
        ...state,
        todos: {
          isLoading: false,
          isError: false,
          data: state.todos.data.filter((elem) => elem.id !== action.payload),
        },
      };
    }
    case COMPLETE_TODO: {
      return {
        ...state,
        todos: {
          isLoading: false,
          isError: false,
          data: state.todos.data
        },
      };
    }
    case ADD_TODO: {
      return {
        ...state,
        todos: {
          isLoading: false,
          isError: false,
          data: [...state.todos.data, action.payload],
        },
      };
    }
    default:
      return state;
  }
};
