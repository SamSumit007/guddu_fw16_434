import React, { useState } from 'react'

export const TimmerInput = () => {
    const [start, setstart] = useState(0);
    const [end, setend]= useState(0);
  return (
      <>
      <input type="number" placeholder='Start value' value={start} onChange={()=>setstart(e.target.value)}/>
      <br />
      <input type="number"   placeholder='End value' value={end} onChange={()=>setend(e.target.value)}/>
      </>
  )
}
