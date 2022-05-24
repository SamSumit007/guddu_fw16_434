import { useState } from "react";
import "../otp.css";

type Accordiantype = {
  data: Element[];
};
type Element = { title: string; desc: string };

export const Accordian = ({ data }: Accordiantype) => {
  // console.log(data[1])
  const [opened, setopened] = useState<number[]>([]);

  const handleOpend = (index: number) => {
    if(opened.includes(index)){
      console.log(opened);
      opened.splice(index,1)
      setopened([...opened])
    }else{
      setopened([...opened, index]);
    }
  };
  return (
    <div>
      {data.map((el, index) => (
        <Card
          key={index}
          index={index}
          handleOpend={handleOpend}
          isvisible={opened.includes(index)}
          title={el.title}
          desc={el.desc}
        />
      ))}
    </div>
  );
};

type cardType = {
  title: string;
  desc: string;
  index: number;
  isvisible: boolean;
  handleOpend: (i: number) => void;
};
const Card = ({ title, desc, isvisible, handleOpend, index }: cardType) => {
  return (
    <div className="accordianContainer">
      <h2 onClick={() => handleOpend(index)}>{title}</h2>
      {isvisible && <p>{desc}</p>}
    </div>
  );
};
