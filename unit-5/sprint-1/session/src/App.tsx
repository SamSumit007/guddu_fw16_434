import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GithubSearch } from './day-3/Components/GithubSearch';
import { ShowMe } from './day-3/Timeout/ShowMe';

function App() {
  return (
    <div className="App">
  <GithubSearch/>
  {/* <ShowMe/> */}
    </div>
  );
}

export default App;
