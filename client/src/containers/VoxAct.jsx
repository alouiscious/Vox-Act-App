import React, { Component } from "react";
// import {
  //   BrowserRouter as Router,
  //   Redirect,
  //   Route
  // } from 'react-router-dom';
import Login from '../components/users/Login'
import ClientInput from '../components/clients/ClientInput'
import ClientPage from '../components/clients/ClientPage';
// import TalentInput from '../components/talents/Talents'
import { getClients, addClient } from "../actions/clientActions";
import { addTalent, getTalents } from "../actions/talentActions";
import { addUser, loginUser } from "../actions/userActions";
import { connect } from "react-redux";

class VoxAct extends Component {

  componentDidMount(){
     
    this.props.getClients()
    // this.props.getTalents()
  }

  render() {

    return(
      <div className="VoxActHome">
                <ClientInput 
                  addClient={this.props.addClient} 
                  addUser={this.props.addUser}
                  loginUser={this.props.loginUser} 
                />
                <br />
                {this.props.error ? <p>{this.props.error}</p> : null}
                <Login 
                  loginUser={this.props.loginUser} 
                />
                {/* <TalentInput 
                  addTalent={this.props.addTalent} 
                /> */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    error: <state className="loginerror"></state>
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addClient: client => dispatch({ type: 'ADD_CLIENT', client}),
//     loginUser: user => dispatch({type: 'LOGIN_USER', user})
//   }
// }


export default connect(mapStateToProps, { addClient, addUser, loginUser, getClients, addTalent, getTalents })(VoxAct)