import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterGroup from './CounterGroup/CounterGroup';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <CounterGroup defaultCounts={3}/>
      </header>
    </div>
  );
}

export default App;
