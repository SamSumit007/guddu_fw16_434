import React, { useState } from "react";
import styles from "./Employee.module.css";

export default function EmployeeForm() {
  const [formData, setformData] = useState({});

  const handleChange = (e) => {
    const inputName = e.target.name;
    if (e.target.type === "checkbox") {
      console.log(e.target.checked);
      setformData({
        ...formData,
        [inputName]: e.target.checked,
      });
    } else {
      setformData({
        ...formData,
        [inputName]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log(formData);
    postEmployee(formData);
  };

  const postEmployee = async (formData) => {
    try {
      let res = await fetch(`http://localhost:3000/EmployeeDetails`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData),
      });
      let data = await res.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.mainDiv}>
      <form onSubmit={handleSubmit}>
        <div className={styles.myForm}>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={handleChange}
          />
        </div>
        <div className={styles.myForm}>
          <label>Age</label>
          <input
            type="number"
            name="age"
            placeholder="age"
            onChange={handleChange}
          />
        </div>
        <div className={styles.myForm}>
          <label>Address</label>
          <textarea
            name="address"
            placeholder="Enter Address"
            cols="25"
            rows="3"
            onChange={handleChange}
          />
        </div>
        <div className={styles.myForm}>
          <label>Department</label>
          <select name="Dept" onChange={handleChange}>
            <option value="marketing">Marketing</option>
            <option value="addmission">Addmission</option>
            <option value="support">Support</option>
            <option value="curriculam">Curriculam</option>
          </select>
        </div>
        <div className={styles.myForm}>
          <label>Salary</label>
          <input
            type="text"
            name="salary"
            placeholder="Saleary"
            onChange={handleChange}
          />
        </div>
        <div className={styles.myForm}>
          <label>Marital Status</label>
          <input
            style={{ height: "20px", width: "50px" }}
            type="checkbox"
            name="marital_status"
            onChange={handleChange}
          />
        </div>
        <div className={styles.myForm}>
          <input type="submit" value="Submit" className={styles.Submitbutton} />
        </div>
      </form>
    </div>
  );
}
