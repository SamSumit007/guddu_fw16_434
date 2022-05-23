import { useState } from "react";

export const useCounter = (init:number) => {
    const [value, setvalue] = useState(init)

    const inc = (def:number)=>{
        setvalue(value+ def);
    };
    const dec = (def:number)=>{
        setvalue(value- def);
    }
    const set = (def:number)=>{
        setvalue(100);
    }

    return {inc,dec,value, set}

};
