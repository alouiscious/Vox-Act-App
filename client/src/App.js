import React from 'react';
import logo from './logo.jpg';
import './App.css';
import { BrowserRouter as Router,
  Route } from "react-router-dom";
import VoxAct from './containers/VoxAct'
import ClientInput from "./components/clients/ClientInput";
import Login from './components/users/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Router>
            <Route exact path="/" component={VoxAct}/>
            <Route path="/ClientInput" component={ClientInput}/>
            <Route path="/Login" component={Login}/>
            
          </Router>
        </div>
            <a
            className="App-link"
            href="https://alouisciousmedia.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span role="img" alt="copyright"> 
              <label name="copyright">
              </label>
              ©℗ 1994-2020 Alouiscious Media™️
            </span>
              </a>
        </header>
    </div>
  );
}

export default App;
