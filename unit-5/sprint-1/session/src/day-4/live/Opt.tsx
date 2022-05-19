import React, { useMemo, useState } from 'react'

export const Opt = () => {
    const [text, setText] = useState('')
    const [num, setnum] = useState(2);

    const fibo = (n:number):number=>{
        if(n<=1){
            return n
        }
        return fibo(n-1)+fibo(n-2)
    }

    const memoisedfibo= useMemo(()=>fibo(Number(text)),[text])

    const nthfibo = useMemo(()=>fibo(num),[num])

    const calfibo =()=>{
        // const res = fibo(Number(text))
        console.time("memo")
        console.log("fibo",memoisedfibo)
        console.timeEnd("memo")
    }
  return (
    <div>
        {/* <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <button onClick={calfibo}>Calculate</button> */}
        <h1>fibo of{num} is {nthfibo}</h1>

        <button onClick={()=>setnum(num+1)} >fibo 1 to 2</button>

        {/* <h1>{counter}</h1> */}
    </div>
  )
}
