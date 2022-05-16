import { ERR_LOGIN, FILTER_TAG, GET_TASK, LOADING_TASK, LOGIN } from "./Action";

const initState = {
  isLoading: false,
  todoTask:[],
  inProgressTask:[],
  done:[],
  task: [],
  token: "",
  loginErr: false,
};

export const taskReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN: {
      return {
        ...state,
        token: payload,
      };
    }
    case ERR_LOGIN: {
      return {
        ...state,
        loginErr: true,
        token: "",
      };
    }
    case LOADING_TASK: {
      return {
        ...state,
        isLoading: true,
        task: [],
      };
    }
    case GET_TASK: {
      return {
        ...state,
        task: payload,
      };
    };
    case FILTER_TAG: {
      return {
        ...state,
        inProgressTask:state.task.filter((item)=>item.taskStatus!=payload)
      };
    }
    default:
      return state;
  }
};
