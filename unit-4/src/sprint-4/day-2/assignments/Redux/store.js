
import { legacy_createStore } from "redux";
import { reducer } from "./reducer";

const initialState={
    todos:{
        isloading:false,
        isError:false,
        data:[],
    }
}
export const store = legacy_createStore(reducer,initialState);