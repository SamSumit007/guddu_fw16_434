import { useState } from 'react';
import './App.css';
import { OtpInput } from './day-1/part-1/OtpInput';
import { TabsComp } from './day-1/part-2/Tabs';

function App() {
  const [Otp,setOtp] =useState('')
  const handleOtp = (otp:string)=>{
    setOtp(otp);
  }
  const handleSubmit=()=>{
    console.log(Number(Otp));
  }
  return (<>
    <div className="App">
     <OtpInput Otplength={4} onChange={handleOtp} />
     <button className='btn' onClick={handleSubmit}>Submit</button>
    </div>
    <TabsComp/>
  </>
  
  );
}

export default App;
