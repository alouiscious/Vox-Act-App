import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Users from './components/users/Users';
import Navbar from "./components/Navbar";
import VoxAct from './containers/VoxAct'
import User from './/components/users/User';
import UserPage from './components/users/UserPage';
import logo from './logo.jpg';
import './App.css';

const App = () => {
  return (
      <Router>
        <Navbar />
        <br />
        <img src={logo} className="App-logo" alt="logo" />
        <Switch>
          <Route exact path="/" component={VoxAct} />
          <Route exact path="/Users" component={Users} />
          <Route exact path="/Users/:id" component={User} />
          <Route exact path="/UserPage/:id" component={UserPage} />
          {/* <Redirect to="/" /> */}

        </Switch>
      </Router>


  )
}

export default App;
