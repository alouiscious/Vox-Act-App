import { Component } from "react";
import React from 'react'
import ClientInput from '../components/clients/ClientInput'
import Login from '../components/users/Login'
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
      <div>
        <ClientInput addClient={this.props.addClient}/>
        <br />
        <Login loginUser={this.props.loginUser} />
        {/* <TalentsContainer /> */}
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


export default connect(null,  { addClient, loginUser })(VoxAct)