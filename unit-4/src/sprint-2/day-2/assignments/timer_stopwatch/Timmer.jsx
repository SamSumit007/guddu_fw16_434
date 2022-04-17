import React, { useEffect, useState } from "react";
import styles from "./Timer.module.css";
import Timer from "../Timer1/Timer";

export const Timmer = () => {
  const [time, settime] = useState(0);
  const [timerOn, settimerOn] = useState(false);
  const [stopWatch, setstopWatch]= useState(true)

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        settime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <>
    <div className={styles.buttonDiv}><button onClick={()=>setstopWatch(false)}>Timer</button>
    <button onClick={()=>setstopWatch(true)}>Stop Watch</button>
    </div>
    {stopWatch ? ( <>
     <h1>MY STOP WATCH</h1>
      <div className={styles.timerDiv}>
        <span>{(Math.floor(time / 60000) % 60)<10 ? "0" + (Math.floor(time / 60000) % 60) : (Math.floor(time / 60000) % 60)}:</span>
        <span>{(Math.floor(time / 1000) % 60)<10?"0" + (Math.floor(time / 1000) % 60):(Math.floor(time / 1000) % 60)}:</span>
        <span>{((time / 10) % 100)<10 ? "0" + ((time / 10) % 100) :((time / 10) % 100)}</span>
      </div>

      <div className={styles.buttonDiv}>
        {!timerOn ? (
          <button onClick={() => settimerOn(true)}>Start</button>
        ) : (
          <button onClick={() => settimerOn(false)}>Stop</button>
        )}
        {timerOn ? (
          <button onClick={() =>{settime(0); settimerOn(false)} }>Restart</button>
        ) : (
          <button onClick={() => settimerOn(true)}>Resume</button>
        )}
      </div></> ) :( <>
        <h1>My Timer</h1>
        <Timer/>
      </> )}
     
    </>
  );
};
