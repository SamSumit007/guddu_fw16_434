export const reducer = (state, action)=>{
    switch(action.type){
        case "INCREMENT":{
            return {
                ...state,count:state.count++
            }
        }
        case "DECREMENT":{
            return {
                ...state,count:state.count--
            }
        }
        case "ADD":{
            return {
                ...state,count:(state.count+=(+action.value))
            }
        }
        case "SUBTRACT":{
            return {
                ...state,count:(state.count-=(+action.value))
            }
        }
        case "MULTIPLY":{
            return {
                ...state,count:(state.count*=(+action.value))
            }
        }
        case "DIVIDE":{
            return {
                ...state,count:(state.count/=(+action.value))
            }
        }
        default:{
            return state
        }
        
    }
}