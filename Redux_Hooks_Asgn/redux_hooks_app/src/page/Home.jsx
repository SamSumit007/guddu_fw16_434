import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterData, getTask } from '../Redux/Action';

export const Home = () => {

  const dispatch = useDispatch();
  const {task,isLoading,inProgressTask}=  useSelector((state)=>state);

  useEffect(()=>{
    getTask(dispatch);
    console.log(task,isLoading)
    dispatch(filterData("todo"))
    console.log("filter",inProgressTask)
  },[dispatch])
  return (<>
  <div>
<p>All Task: {task.length}</p>
<p>Personal Task: {inProgressTask.length}</p>

</div>
  </>
    
  )
}
