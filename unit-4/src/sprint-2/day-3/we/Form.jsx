import React, { useState } from "react";
import styles from "./Form.module.css";

export const Form = () => {
  const [formData, setformData] = useState({});

  const handleChange = (e) => {
    const inputName = e.target.name;
    if (e.target.type === "checkbox") {
      // console.log(e.target.value,e.target.checked);
      setformData({
        ...formData,
        [inputName]: e.target.checked,
      });
    } else if (e.target.type === "file") {
      setformData({
        ...formData,
        [inputName]: e.target.files,
      });
    }
    setformData({
      ...formData,
      [inputName]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className={styles.mainDiv}>
      <h1>My form</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.myForm}>
          <label htmlFor="">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter User Name"
            onChange={handleChange}
          />
        </div>
        <div className={styles.myForm}>
          <label>Password</label>
          <input
            type={formData.showPassword ? "text" : "password"}
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
        </div>
        <div className={styles.myForm}>
          <label>show Password</label>
          <input type="checkbox" name="showPassword" onChange={handleChange} />
        </div>
        <div className={styles.myForm}>
          <label>age</label>
          <input
            type="number"
            name="age"
            placeholder="age"
            onChange={handleChange}
          />
        </div>
        <div className={styles.myForm}>
          <label>dob</label>
          <input type="date" name="dob" onChange={handleChange} />
        </div>
        {/* <div className={styles.myForm}>
            <label>Gender</label>
            <select name="gender" onChange={handleChange} >
                <option value="M">Male</option>
                <option value="F">Female</option>
            </select>
        </div> */}
        <div className={styles.myForm}>
            <label htmlFor="">Gender</label>
            <input type="radio" name="gender" value="male" onChange={handleChange}/>Male
            <br />
            <input type="radio"  name="gender" value="female" onChange={handleChange}/>Female
        </div>
        <div className={styles.myForm}>
          <label>Resume</label>
          <input type="file" name="resume" onChange={handleChange} />
        </div>
        <div className={styles.myForm}>
          <input type="submit" value="Submit" className={styles.Submitbutton} />
        </div>
      </form>
    </div>
  );
};
