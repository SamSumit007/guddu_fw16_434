import { useState } from "react";

export const useList = (arr: number[]) => {
    const [list,setlist] = useState(arr);

    const push=(props:number)=>{
        list.push(props)
    }
    const pop= ()=>{
        list.pop();
    }

    const clear = ()=>{

    }
    const reset = ()=>{

    }
    const map =()=>{

    }
    return [list, {push, pop, clear, reset, map}]
};
