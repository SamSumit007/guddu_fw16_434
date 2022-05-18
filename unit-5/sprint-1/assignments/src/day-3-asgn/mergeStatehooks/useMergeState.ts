import React, { useState } from 'react'

export const useMergeState = (initState:object) => {
    const [ state, setstate] = useState(initState);

  return {state,setstate}
}
