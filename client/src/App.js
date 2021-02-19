import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import UsersList from "./components/users/UsersList";
import Navbar from "./components/Navbar";
import VoxActSignIn from "./containers/login/VoxActSignIn";
import VoxActSignUp from "./containers/login/VoxActSignUp";
import UserEditPage from ".//containers/users/UserEditPage";
import UserPage from "./containers/users/UserPage";
import logo from "./logo.jpg";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <br />
      <img src={logo} className="App-logo" alt="logo" />
      <Switch>
        <Route exact path="/" component={VoxActSignIn} />
        <Route exact path="/UserInput" component={VoxActSignUp} />
        <Route exact path="/Users" component={UsersList} />
        <Route exact path="/UserEditPage/" component={UserEditPage} />
        <Route path="/UserPage/:id" component={UserPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
