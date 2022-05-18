import React from 'react'
import { useTimeout } from './useTimeout'

export const ShowMe = () => {
    const toShow = useTimeout(3)


    if(!toShow) return <h1>Loading UI.....</h1>
  return <h1 style={{backgroundColor:"magenta"}}>Hello world</h1>
}
