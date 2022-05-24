import React, { useRef, useState } from "react";
import "./otp.css";

type OtpType = {
  Otplength: number;
  onChange: (s: string) => void;
};

export const OtpInput = ({ Otplength, onChange }: OtpType) => {
  const arrInp = new Array(Otplength);
  arrInp.fill(0);
  const [opt, setOtp] = useState("");
  const refInput = useRef<HTMLInputElement[]>([]);

  const handleKey = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.code === "Backspace") {
      if (index > 0) {
        refInput.current[index - 1].focus();
        refInput.current[index - 1].select();
      }
    } else {
      if (index < Otplength - 1) refInput.current[index + 1].focus();
    }
    onChange(opt);
  };

  return (
    <div className="divcontainer">
      <h1>Enter Your OTP</h1>
      {arrInp.map((elem, index) => (
        <input
          key={index}
          type="text"
          className="inputBox"
          maxLength={1}
          onChange={(e) => setOtp(opt + e.target.value)}
          onKeyUp={(e) => handleKey(e, index)}
          ref={(element) => {
            if (refInput.current && element) {
              refInput.current[index] = element;
            }
          }}
        />
      ))}
    </div>
  );
};
function otp(otp: any) {
  throw new Error("Function not implemented.");
}
