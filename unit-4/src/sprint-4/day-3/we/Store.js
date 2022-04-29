import { combineReducers, legacy_createStore } from "redux";
import { CounterReducer } from "./counter/reducer";
import { todoReducer } from "./Todo/TodoReducer";

const rootreducer = combineReducers({
  count: CounterReducer, //global state come from
  todo: todoReducer,
});

export const store = legacy_createStore(
  rootreducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
