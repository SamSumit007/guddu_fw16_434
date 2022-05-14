import React, { useState } from 'react'
import axios from 'axios'
import styles from './styles/Register.module.css'
import {Link, useNavigate} from 'react-router-dom'

export const Register = () => {
    const [formData,setformData] = useState({});
    const [response,setresponse] = useState(false);
    const navigate = useNavigate();

    const handleChange=(e)=>{
        const keyname= e.target.name
        setformData({
            ...formData,
            [keyname]:e.target.value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(formData.name&& formData.email&&formData.password&&formData.username&&formData.mobile&&formData.description){
            axios.post("https://masai-api-mocker.herokuapp.com/auth/register",formData)
            .then(r=>{
                console.log(r.data.error); //{error: false, message: 'Registration Success'} or {error: true, message: 'Registration failed, user already exists'}
                setresponse(r.data.error)
                if(!r.data.error){
                    navigate("/login")
                }     
            })
            .catch(e=>{
                // setresponse("e.data")
                console.log(e);
            })
        }
    }
    if(response) return <h3>Registration failed, user already exists <Link to="/" onClick={()=>setresponse(false)} >Try again</Link>  </h3>
  return (
<div className={styles.outerdiv} >
        <h1 id={styles.heading}>User Registration</h1>
        <form onSubmit={handleSubmit}>
            <input className={styles.inp} type="text" name="name" placeholder='Enter name' onChange={handleChange} />
            <br />
            <input className={styles.inp} type="email" name="email" placeholder='Enter email' onChange={handleChange} />
            <br />
            <input className={styles.inp} type="password" name="password" placeholder='Enter password' onChange={handleChange} />
            <br />
            <input className={styles.inp} type="text" name="username" placeholder='Enter username' onChange={handleChange} />
            <br />
            <input className={styles.inp} type="text" name="mobile" placeholder='Enter mobile' onChange={handleChange} />
            <br />
            <textarea className={styles.inp} type="text" name="description" placeholder='Enter description' onChange={handleChange} />
            <br />
            <input className={styles.button} type="submit" value="Register"/>
        </form>
        <h3 id={styles.heading}>Click on Login if already registered <Link to="/login">Login</Link> </h3>
    </div>
  )
}


// Url for api calling : "https://masai-api-mocker.herokuapp.com"
// Data formate Should be like this:
// {
//     "name": "MASAI School",
//     "email": "hello@masai.com"
//     "password": "secret",
//     "username": "masai-school",
//     "mobile": "9876543210",
//     "description": "A Transformation in education!" 
//   }
