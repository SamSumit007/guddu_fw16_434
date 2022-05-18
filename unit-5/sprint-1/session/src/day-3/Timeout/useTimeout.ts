import { useEffect, useState } from "react";

export const useTimeout = (delay: number) => {
  const [toShow, setToshow] = useState(false);

  useEffect(() => {
    let id = setTimeout(() => {
      setToshow(true);
    }, delay * 1000);

    return () => clearTimeout(id);
  }, []);
  return toShow;
};
