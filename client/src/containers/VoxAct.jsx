import React, { Component } from "react";
import Login from '../components/users/Login'
import ClientInput from '../components/clients/ClientInput'
import { getClients, addClient } from "../actions/clientActions";
import { getTalents } from "../actions/talentActions";
import { addUser, loginUser } from "../actions/userActions";
import { connect } from "react-redux";

class VoxAct extends Component {

  componentDidUpdate() {
    this.props.getClients()
    this.props.getTalents()
  }

  render() {
    return(
      <div className="VoxActHome">
        <ClientInput 
          history={this.props.history}
          addUser={this.props.addUser}
          addClient={this.props.addClient} 
          loginUser={this.props.loginUser} 
          />
        <br />
          <Login
            history={this.props.history}
            loginUser={this.props.loginUser} 
          />
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


export default connect(mapStateToProps, { addClient, addUser, loginUser, getClients, getTalents })(VoxAct)