import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Containers/Counter';
import CounterWithState from './components/CounterWithState';

function App() {
  return (
    <div className="App" data-test="container-app">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Counter />
        <CounterWithState />
      </main>
    </div>
  );
}

export default App;
