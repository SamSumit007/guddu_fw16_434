import { useEffect, useState } from "react";

export const useTimer = (init: number) => {
  const [time, settime] = useState(init);
  const [isstart, setIsstart] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (isstart) {
      interval = setInterval(() => {
        settime((init) => {
          if (init == 1) setIsstart(false);
          return init - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isstart]);
  return { time, settime, isstart, setIsstart };
};
