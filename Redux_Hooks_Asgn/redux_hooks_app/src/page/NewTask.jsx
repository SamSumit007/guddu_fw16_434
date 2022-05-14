import React, { useState } from "react";
import { AddSubTask } from "../Components/AddSubTask";
import styles from "./styles/newtask.module.css";
import { v4 as uuidv4 } from 'uuid';

export const NewTask = () => {
  const [AddSubtask, setAddSubtask] = useState([]);
  const [TaskData, setTaskData] = useState({});
  const [tag, settag] = useState([]);

  const handlechange = (e) => {
    const keyname = e.target.name;
    if(e.target.type=="checkbox"){
      setTaskData({
        ...TaskData,
        [keyname]: e.target.checked,
      });
    }
    setTaskData({
      ...TaskData,
      [keyname]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setTaskData({...TaskData, subtask: AddSubTask,id:uuidv4() });
    console.log(TaskData);
  };

  return (
    <div className={styles.maindiv}>
      <h1>Add New Task</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formdiv}>
          <div className={styles.inpDiv}>
            <input
              type="text"
              placeholder="Title"
              name="title"
              onChange={handlechange}
            />
            <br />
            <textarea
              type="text"
              name="discription"
              placeholder="Discription"
              onChange={handlechange}
            />
            <div>
              <label>Task Status</label>
              <br />
              <input
                type="radio"
                name="taskStatus"
                onChange={handlechange}
              />{" "}
              Todo
              <br />
              <input
                type="radio"
                name="taskStatus"
                onChange={handlechange}
              />{" "}
              In Progress
              <br />
              <input
                type="radio"
                name="taskStatus"
                onChange={handlechange}
              />{" "}
              Done
            </div>
            <div>
              <label>Tag</label>
              <br />
              <input
                type="checkbox"
                name="personal"
                onChange={handlechange}
              />{" "}
              Personal
              <br />
              <input
                type="checkbox"
                name="official"
                onChange={handlechange}
              />{" "}
              Official
              <br />
              <input
                type="checkbox"
                name="other"
                onChange={handlechange}
              />{" "}
              other
            </div>
          </div>
          <div className={styles.inpDiv}>
            <label>Add Sub Task</label>
            <AddSubTask AddSubtask={AddSubtask} setAddSubtask={setAddSubtask} />
          </div>

          <div className={styles.inpDiv}>
            <label htmlFor="">Date: </label>
            <input
              className={styles.inp}
              type="date"
              name="date"
              onChange={handlechange}
            />
            <br />
            <input type="submit" value="CREATE A NEW TASK" />
          </div>
        </div>
      </form>
    </div>
  );
};
