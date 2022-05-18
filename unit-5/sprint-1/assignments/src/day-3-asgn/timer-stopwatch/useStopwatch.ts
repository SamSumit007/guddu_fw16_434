import { useEffect, useState } from "react";

export const useStopwatch = (init: number) => {
  const [time, settime] = useState(init);
  const [startTimer, setstartTimer] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (startTimer) {
      interval = setInterval(() => {
        settime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [startTimer]);

  // const { time, stopTimer, startTimer, resetTimer } = useTimer( initTime ) // millisec
  return { time, setstartTimer, settime };
};
