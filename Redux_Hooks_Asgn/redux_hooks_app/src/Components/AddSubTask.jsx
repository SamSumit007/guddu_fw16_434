import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const AddSubTask = ({ AddSubtask, setAddSubtask }) => {
  const [addSubTask1, setaddSubTask1] = useState("");
  const [AddSubtask2, setAddSubtask2] = useState([]);


  const handleAdd = () => {
    if (addSubTask1) {
      // console.log(addSubTask1);
      const objSubtask={
        subtask:addSubTask1,
        status:false,
        id:uuidv4()
      }
      // console.log(objSubtask)
      setAddSubtask2([...AddSubtask2,objSubtask])
      setAddSubtask(AddSubtask2)
      console.log(AddSubtask)
      setaddSubTask1("");
    }
  };
  return (
    <div>
      <input
        type="text"
        value={addSubTask1}
        onChange={(e) => setaddSubTask1(e.target.value)}
        placeholder="Add Sub Task"
      />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
};
