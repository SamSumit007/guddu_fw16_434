import React, { useState } from 'react'

function Sign_up() {
  const [formdata, setformdata]=useState({});
  const [isshow,setisshow]=useState(true);

  const show =()=>{
    setisshow(isshow===false?true:false)
  }

  const handleChange=(e)=>{
    const Name = e.target;
    setformdata({
      ...formdata,[Name.name]:Name.value
    })
  }

  

  const handleSubmit=(e)=>{
e.preventDefault()
console.log(formdata)
  }

  return (
    <div className= {""}>
      <form onSubmit={handleSubmit}>
        <div className={""}>
          <label>Username</label>
          <br />
          <input type="text" placeholder='Enter username' name="username" onChange={handleChange} />
        </div>
        <div className={""}>
          <label>Password</label>
          <br />
          <input type={isshow?"password":"text"} placeholder='Enter password' name="password" onChange={handleChange} />
        </div>
        <div className={""}>
          <label> Show Password</label>
          <input type="checkbox" name="show" onChange={show} />
        </div>
        <div style={{margin:"20px"}}>
          <input id={""} type="submit" value={"Sign UP"}/>
        </div>
      </form>
    </div>
  )
}

export default Sign_up