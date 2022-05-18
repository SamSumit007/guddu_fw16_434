import './App.css';
import {useTimeout} from './day-3-asgn/TimeoutHooks/useTimeout'
import { Stopwatch } from './day-3-asgn/timer-stopwatch/Stopwatchs';
import { Timer } from './day-3-asgn/timer-stopwatch/Timer';

function App() {
  const toShow = useTimeout(2)

  return (
    <div className="App">

      {!toShow ?  <h1>Loading UI.....</h1> : <><Timer/><Stopwatch/></> }
    
    </div>
  );
}

export default App;
