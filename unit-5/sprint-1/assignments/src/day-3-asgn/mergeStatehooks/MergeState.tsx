import React from 'react'
import { useMergeState } from './useMergeState'

export const MergeState = () => {
    const initState = {
        username: "",
        email: "",
        password: "",
    }
    // const [ state, setState ] = useMergeState(initState);

  return (
    <div>
        <form action="">
        <input type="text" name='username' />
        <br />
        <input type="password" name='password' />
        <br />
        <input type="email" name="email" />
        <input type="submit" value="submit" />
        </form>
    </div>
  )
}
