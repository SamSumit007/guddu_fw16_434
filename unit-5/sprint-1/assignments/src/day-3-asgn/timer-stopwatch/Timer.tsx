import { useTimer } from "./useTimers";

export const Timer = () => {
  const { setIsstart, settime, time } = useTimer(10);
  return (
    <div>
      <h1>Timer</h1>
      {" "}
      <h1>{time}</h1>
      <button onClick={() => setIsstart(true)}>start</button>
      <button onClick={() => setIsstart(false)}>stop</button>
      <button onClick={() => settime(10)}>restart</button>
    </div>
  );
};
