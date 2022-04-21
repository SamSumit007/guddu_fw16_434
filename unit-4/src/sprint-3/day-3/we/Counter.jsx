import React from "react";
import { useParams } from "react-router-dom";

function Counter() {
  const parms = useParams();

  return (
    <div>
      <h1>Counter:{parms.initialCount}</h1>
    </div>
  );
}

export default Counter;
