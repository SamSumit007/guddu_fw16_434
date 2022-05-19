import { useState } from "react";

export const useMergeState = (initState: any) => {
  const [state, setstate] = useState(initState);

  return [state, setstate];
};
