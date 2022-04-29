import { localdata, savedata } from "../utils/localStorage";
import { LOGIN_FAILURE, LOGIN_SUCESS } from "./AuthAction";



const token = localdata("token");

const initialState = {
    isAuth:token ? true :false,
    token:token||""
};


export const authReducer =(state=initialState, {type, payload})=>{
switch(type){
    case LOGIN_SUCESS:{
        savedata("token",payload)
        return{
            ...state, 
            isAuth:true,
            token:payload
        }
    };
    case LOGIN_FAILURE:{
        return{
            ...state, 
            isAuth:false,
            token:""
        }
    };
    default :
    return state
}
}