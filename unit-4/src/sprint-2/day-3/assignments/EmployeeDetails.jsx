import React, { useEffect, useState } from "react";
import EmployeeForm from "./EmployeeForm";
import styles from "./Employee.module.css";

export default function EmployeeDetails() {
  const [employeeData, setemployeeData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/EmployeeDetails")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setemployeeData(data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <h1 className={styles.heading}>EmployeeDetails</h1>
      <div id={styles.main_div}>
        <EmployeeForm />
        <div id={styles.rightDiv}>
          <table>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Department</th>
              <th>Marital status</th>
              <th>salary</th>
              <th>Address</th>
            </tr>
            <tbody>
              {employeeData.map((elem) => {
                return (
                  <><tr>
                       <td>{elem.name}</td>
                    <td>{elem.age}</td>
                    <td>{elem.Dept}</td>
                    <td>{elem.marital_status ? "Married":"Unmairred"}</td>
                    <td>{elem.salary}</td>   
                    <td>{elem.address}</td>
                  </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
