import { INCREMENT,DECREMENT } from "./actionType";

export const reducer = (state, action)=>{
    switch(action.type){
        case INCREMENT:{
            return {
                ...state,
                count:state.count+action.payload,
            }
        };
        case DECREMENT:{
            return {
                ...state,
                count:state.count-action.payload,
            }
        }
        default :
        return state
    }

}