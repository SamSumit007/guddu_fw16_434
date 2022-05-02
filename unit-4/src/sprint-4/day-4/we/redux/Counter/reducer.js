import { DECREMENT, INCREMENT, RESET } from "./action";

const initialState = {
  count: 0,
};

export const CounterReducer = (state = initialState, {type,payload}) => {
  switch (type) {
    case INCREMENT:
      return {
        count: state.count + payload,
      };
    case DECREMENT:
      return {
        count: state.count - payload,
      };
    case RESET:
      return {
        ...initialState,
      };
    default: {
      return state;
    }
  }
};
