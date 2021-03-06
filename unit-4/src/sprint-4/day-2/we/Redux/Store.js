import { combineReducers, legacy_createStore } from "redux";
import { authReducer } from "../Auth/AythReducer";
import { reducer } from "./Reducer";

const rootReducer = combineReducers({ auth: authReducer, app: reducer });

export const store = legacy_createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
