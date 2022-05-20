import "./App.css";
import { SearchCountry } from "./day-3-asgn/countrySearch/SearchCountry";
import { MergeState } from "./day-3-asgn/mergeStatehooks/MergeState";
import { useTimeout } from "./day-3-asgn/TimeoutHooks/useTimeout";
import { Stopwatch } from "./day-3-asgn/timer-stopwatch/Stopwatchs";
import { Timer } from "./day-3-asgn/timer-stopwatch/Timer";

function App() {
  const toShow = useTimeout(2);

  return (
    <div className="App">
      {/* {!toShow ?  <h1>Loading UI.....</h1> : <><Timer/><Stopwatch/></> } */}

      <SearchCountry />
      <MergeState />
    </div>
  );
}

export default App;
