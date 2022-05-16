import React, { useEffect, useState } from "react";
import { AddSubTask } from "../Components/AddSubTask";
import styles from "./styles/newtask.module.css";
import { v4 as uuidv4 } from "uuid";
import { addTask } from "../Redux/Action";
import { useDispatch } from "react-redux";

export const NewTask = () => {
  const [TaskData, setTaskData] = useState({});
  const [tag, settag] = useState([]);
  const [addSubTask, setaddSubTask] = useState("");
  const [AddSubTask, setAddSubtask] = useState([]);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (addSubTask) {
      const objSubtask = {
        subtask: addSubTask,
        status: false,
        id: uuidv4(),
      };
      setAddSubtask([...AddSubTask, objSubtask]);
    }
  };

  const handlechange = (e) => {
    const keyname = e.target.name;
    if (e.target.type == "checkbox") {
      if (e.target.name == "personal") settag([...tag, "personal"]);
      else if (keyname == "official") settag([...tag, "official"]);
      else settag([...tag, "other"]);
    } else {
      setTaskData({
        ...TaskData,
        [keyname]: e.target.value,
      });
    }
  };

  useEffect(()=>{
    setTaskData({ ...TaskData, tag: tag, subtask: AddSubTask, id: uuidv4() });
  },[AddSubTask,tag])
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(TaskData)
    addTask(dispatch,TaskData);
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
                value={"todo"}
                onChange={handlechange}
              />{" "}
              Todo
              <br />
              <input
                type="radio"
                name="taskStatus"
                value={"In progress"}
                onChange={handlechange}
              />{" "}
              In Progress
              <br />
              <input
                type="radio"
                name="taskStatus"
                value={"Done"}
                onChange={handlechange}
              />
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
            {/* <AddSubTask AddSubtask={AddSubtask} setAddSubtask={setAddSubtask} /> */}
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
      <div>
        <input
          type="text"
          value={addSubTask}
          onChange={(e) => setaddSubTask(e.target.value)}
          placeholder="Add Sub Task"
        />
        <button onClick={handleAdd}>ADD</button>
      </div>
    </div>
  );
};
