import { useRef, useState } from "react";
import "./otp.css";

type OtpType = {
  totalInput: number;
  onChange: (otp:string)=>void;
};

export const Otpinput = ({ totalInput,onChange }: OtpType) => {
  const inputRef = useRef<HTMLInputElement[]>([]); //{current:[input,input,input,input]}

  const [otp,setOtp] = useState('');


  return (
    <div>
      <h1>Enter Your OTP </h1>
      {new Array(totalInput).fill(0).map((elem, index) => (
        <input

        onChange={(e)=>setOtp(otp+e.target.value)}
          onKeyUp={(e) => {
              console.log(e.code);
              if(e.code==="Backspace"){
                  if(index>0){
                    inputRef.current[index - 1].focus();
                inputRef.current[index - 1].select();
                  }
            }    
            else{
                if(index<totalInput-1)
                inputRef.current[index + 1].focus();
            } 
            onChange(otp)  
          }}
          ref={(element) => {
            // console.log(element, index);
            if (inputRef.current && element) {
              inputRef.current[index] = element;
            }
          }}
          type={"text"}
          maxLength={1}
          className="otpinp"
          key={index}
        />
      ))}
    </div>
  );
};

// ristricts prop types
