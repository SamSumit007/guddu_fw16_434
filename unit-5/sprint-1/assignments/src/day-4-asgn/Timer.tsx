import React, { memo, useEffect, useState } from 'react'

export const Timer = (props:any) => {
  console.log("timer rendering")
    useEffect(() => {
         setInterval(() => {
          props.settime((prev: number) => prev + 1);
        }, 1000);
    }, [])
  return (
    <h3>
        Timer: {props.time%60} sec.
    </h3>
  )
}


export const MemoisedTimer = memo(Timer)