import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GithubSearch } from './day-3/Components/GithubSearch';
import { ShowMe } from './day-3/Timeout/ShowMe';
import { Opt } from './day-4/live/Opt';
import { Todo } from './day-4/live/Todo';

function App() {
  return (
    <div className="App">
  {/* <Opt/> */}
  {/* <ShowMe/> */}
  <Todo/>
    </div>
  );
}

export default App;
