import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { Dashdiv, MapDiv } from "./Theme.styled";


const data = [
  {
    id: 1,
    name: "Ritesh",
    company: "masai",
  },
  {
    id: 2,
    name: "Nrupul",
    company: "masai",
  },
  {
    id: 3,
    name: "Yogesh bhatt",
    company: "Paytm",
  },
  {
    id: 4,
    name: "Raja Charan singh",
    company: "Ola   ",
  },
];

function Dashboard() {
    const [Theme] = useContext(ThemeContext)
  return (
    <Dashdiv color={Theme}>
      {data.map((elem) => {
        return (
          <MapDiv color={Theme}>
            <h3>Instructer Nmae: {elem.name}</h3>
            <p>Company Name: {elem.company}</p>
          </MapDiv>
        );
      })}
    </Dashdiv>
  );
}

export default Dashboard;
