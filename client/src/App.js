import React from 'react';
import logo from './logo.jpg';
import './App.css';
import { BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import VoxAct from './containers/VoxAct'
import UserInput from "./components/users/UserInput";
import UsersPage from './components/users/UsersPage';
import Users from './components/users/Users';
import User from "./components/users/User";
import Login from './components/users/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Router>
            <Switch>
              <Route exact path="/" component={VoxAct} />
              <Route path="/UserInput" component={UserInput} />
              <Route path="/Login" component={Login} />
              <Route exact path="/UsersPage" component={UsersPage} />
              <Route exact path="/User" component={User} />
              <Route path="/Users" component={Users} />
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
              ©℗ 1994-2020 Alouiscious Media™️
            </span>
              </a>
        </header>
    </div>
  );
}

export default App;
