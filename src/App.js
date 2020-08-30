import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I love you
        </p>
        <a
          className="App-link"
          href="https://www.timothyebinger.bandcamp.com"
        >
          Bandcamp!
        </a>
      </header>
    </div>
  );
}

export default App;
