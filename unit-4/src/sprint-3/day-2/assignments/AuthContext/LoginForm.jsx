import React, { useContext, useState } from "react";
import { AuthContextProvider } from "./AuthContextProvider";

function LoginForm() {
  const [form, setform] = useState({});
  const { Login } = useContext(AuthContextProvider);
  const [Error, setError] = useState(false)

  const handleChange = (e) => {
    const filed = e.target;
    setform({
      ...form,
      [filed.name]: filed.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    getddata(form)
  };

  const getddata = async(formdata)=>{
      try{
        let res = await fetch("https://reqres.in/api/login",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(formdata)
        });
        let data =await res.json()
        // console.log(data)
        if(data.token){
            console.log("hello if")
            Login()
        }else{
            console.log("hello")
            setError(true)
        }

      }catch(error){
          console.log(error)
      }
  }

  return (
    <>{!Error ? <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Username</label>
            <input type="text" name="username" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input type="text" name="password" onChange={handleChange} />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>:
      <div>
          <h1>Wrong Userid or password</h1>
          <button onClick={()=>setError(false)}>Try Again</button>

      </div>
      
       }
     
    </>
  );
}

export default LoginForm;
