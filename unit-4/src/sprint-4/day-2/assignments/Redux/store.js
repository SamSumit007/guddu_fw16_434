import { combineReducers, legacy_createStore } from "redux";
import { reducer } from "./reducer";
import { authReducer } from "../Auth/reducer";

const rootReducer = combineReducers({ todos: reducer, isAuth: authReducer });
export const store = legacy_createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
