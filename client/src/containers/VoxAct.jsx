import { Component } from "react";
import React from 'react'
import ClientInput from '../components/clients/ClientInput'
import Login from '../components/users/Login'
import { connect } from "react-redux";

class VoxAct extends Component {

  render() {
    return(
      <div>
        <ClientInput addUser={this.props.addUser}/>
        <Login loginUser={this.props.loginUser} />
        {/* <TalentsContainer /> */}
      </div>
    )
  }
}

  const mapDispatchToProps = dispatch => {
    return{
      addUser: client => dispatch({ type: 'ADD_CLIENT', client}),
      loginUser: user => dispatch({ type: 'LOGIN_USER', user}),
      // deleteUser: id => dispatch({ type: 'DELETE_CLIENT', id}) 
    }
  }


export default connect( null, mapDispatchToProps)(VoxAct)