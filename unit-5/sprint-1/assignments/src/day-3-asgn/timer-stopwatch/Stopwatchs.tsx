import { useStopwatch } from './useStopwatch'

export const Stopwatch = () => {
    const {time,setstartTimer,settime } = useStopwatch(0);

  return (<>
    <div>
    <h1>Stopwatch</h1>
        <div><h1>
        <span>{(Math.floor(time / 60000) % 60)<10 ? "0" + (Math.floor(time / 60000) % 60) : (Math.floor(time / 60000) % 60)}:</span>
        <span>{(Math.floor(time / 1000) % 60)<10?"0" + (Math.floor(time / 1000) % 60):(Math.floor(time / 1000) % 60)}:</span>
        <span>{((time / 10) % 100)<10 ? "0" + ((time / 10) % 100) :((time / 10) % 100)}</span>
        </h1>
      </div>
        <button onClick={()=>setstartTimer(true)}>START</button>
        <button onClick={()=>setstartTimer(false)}>STOP</button>
        <button onClick={()=>{settime(0); setstartTimer(false)}}>RESET</button>
    </div>
    <div>

    </div>
    </>
  )
}
