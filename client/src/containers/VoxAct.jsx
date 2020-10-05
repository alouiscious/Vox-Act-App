import { Component } from "react";
import React from 'react'
// import {
  //   BrowserRouter as Router,
  //   Redirect,
  //   Route
  // } from 'react-router-dom';
  // import ClientPage from '../components/clients/ClientPage';
import Login from '../components/users/Login'
import ClientInput from '../components/clients/ClientInput'
import TalentInput from '../components/talents/Talents'
import { getClients } from "../actions/clientActions";
import { addClient } from "../actions/clientActions";
import { loginUser } from "../actions/userActions";
import { connect } from "react-redux";

class VoxAct extends Component {

  componentDidMount(){
    // this.props.addClient()
    // this.props.loginUser()
  }

  render() {

    return(
      <div className="VoxActHome">
        <ClientInput addClient={this.props.addClient} />
        <br />
        <Login loginUser={this.props.loginUser} />
        {/* <TalentInput addTalent={this.props.addTalent} /> */}
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addClient: client => dispatch({ type: 'ADD_CLIENT', client}),
//     loginUser: user => dispatch({type: 'LOGIN_USER', user})
//   }
// }


export default connect(null, { addClient, loginUser, getClients })(VoxAct)