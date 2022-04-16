import React, { useEffect, useRef, useState } from 'react'

import styles from "./Timer.module.css"

export default function Timer() {
    const[end, setend] = useState(null)
    const [time, settime] = useState(0);
    const [timerOn, settimerOn] = useState(false);
    const timerid = useRef()

    const handleStart=()=>{

        if(end!=null){
            timerid.current = setInterval(() => {
                settime(prev=>+prev+1);
                   
        }, 1000);
        }
       
    }
    const handleStop=()=>{
        clearInterval(timerid.current)
    }
    const handleFirst=(e)=>{
        settime(e.target.value)
    }
    const handleEnd=(e)=>{
        setend(e.target.value)
    }
    const handleReset =()=>{
        settimerOn(false);
    }

    if(time==end){
        clearInterval(timerid.current)
        return (<>
        <h1>Time's Up</h1>
        </>)
        
    };

  return (<>
  <div className={styles.maindiv}>
    <div><h1>{(time < 9) ? "0"+time : time}</h1></div>
    <div>
    <input type="number" placeholder='start' onChange={handleFirst} />
    <input type="number" placeholder='end'  onChange={handleEnd}/>
    </div>
    <div>
    <button onClick={handleStart}>Start</button>
    <button onClick={handleStop}>Stop</button>
    </div>
   
    
    </div>
  </>
   
  )
}
