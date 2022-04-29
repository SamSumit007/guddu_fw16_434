import { applyMiddleware, legacy_createStore,compose } from "redux"
import {CounterReducer} from "./reducer"


const midleware1 = (store) => (next) => (action)=>{
    // action.payload=10;
    console.log("entering midleware1")
    console.log(action);
    next(action)
    console.log("exit midleware1")
}

const midleware2 = (store) => (next) => (action)=>{
    console.log("entering midleware2")
    // action.payload=10;
    console.log(action);
    next(action)
    console.log("exit midleware1")
}


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

 
    const enhancer = composeEnhancers(
        applyMiddleware(midleware1,midleware2),
        // other store enhancers if any
      );

// const middlewaremain = applyMiddleware(midleware1,midleware2)

export const store =legacy_createStore(CounterReducer,enhancer)