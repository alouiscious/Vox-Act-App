import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

// import VoxAct from './containers/VoxAct'
import Navbar from "./components/Navbar";
import Users from './components/users/Users';
import User from './components/users/User';
// import UserPage from './components/users/UserPage';
import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <header className="App-header">
    <div>
      <Router className="App">
        <Navbar />
        <br />
        <img src={logo} className="App-logo" alt="logo" />
        <Switch>
          <Route exact path="/Users" component={Users} />
          <Route exact path="/Users/id" component={User} />
          {/* <Route exact path="/" component={VoxAct} /> */}
          {/* <Route exact path="/UserPage/id" component={UserPage} /> */}
          <Redirect to="/" />

        </Switch>
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
          © ℗ 1994-2020 Alouiscious Media™️
        </span>
      </a>
    </header> 
  )
}

export default App;
