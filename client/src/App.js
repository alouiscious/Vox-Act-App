import React from 'react';
import logo from './logo.jpg';
import './App.css';
import VoxAct from './containers/VoxAct'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <VoxAct />
        </div>
            <a
            className="App-link"
            href="https://alouisciousmedia.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span role="img"> 
              ©℗1994-2020 Alouiscious Media™️
            </span>
              </a>
        </header>
    </div>
  );
}

export default App;
