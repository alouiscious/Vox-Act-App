import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Users from './components/users/Users';
import Navbar from "./components/Navbar";
import VoxActSignIn from './containers/VoxActSignIn'
import VoxActSignUp from './containers/VoxActSignUp'
import UserEditPage from './/components/users/UserEditPage';
import UserPage from './components/users/UserPage';
import logo from './logo.jpg';
import './App.css';
import TalentInput from './components/talents/TalentInput';

const App = () => {
  return (
      <Router>
        <Navbar />
        <br />
        <img src={logo} className="App-logo" alt="logo" />
        <Switch>
          <Route exact path="/talentInput" component={TalentInput} />
          <Route exact path="/" component={VoxActSignIn} />
          <Route exact path="/UserInput" component={VoxActSignUp} />
          <Route exact path="/Users" component={Users} />
          <Route exact path="/UserEditPage/:id" component={UserEditPage} />
          <Route path="/UserPage/:id" component={UserPage} />
          <Redirect to="/" />
        </Switch>
      </Router>


  )
}

export default App;
