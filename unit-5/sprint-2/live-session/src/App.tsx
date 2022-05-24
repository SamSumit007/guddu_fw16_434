import './App.css';
import { Otpinput } from './day-1/Otpinput';
import { Accordian } from './day-1/part2/Accordian';

const data = [
  {
    desc:
      "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
    title: "This is panel header 1",
  },
  {
    desc:
      "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
    title: "This is panel header 2",
  },
  {
    desc:
      "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
    title: "This is panel header 3",
  },
  {
    desc:
      "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
    title: "This is panel header 4",
  },
  {
    desc:
      "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
    title: "This is panel header 5",
  },
];

function App() {
  const handlechange = (otp:string)=>{
    console.log("recived otp",otp)
  }


  return (
    <div className="App">
      <Otpinput onChange={handlechange} totalInput={4}/>
      <Accordian data={data}/>
    </div>
  );
}

export default App;
