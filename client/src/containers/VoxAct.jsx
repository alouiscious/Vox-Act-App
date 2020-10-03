import { Component } from "react";
import React from 'react'
import ClientInput from '../components/clients/ClientInput'
import Login from '../components/users/Login'
// import { addClient } from "../actions/clientActions";
// import { loginUser } from "../actions/userActions";
import { connect } from "react-redux";
import Client from '../components/clients/Clients';
import MovieShow from '../components/MovieShow';
class VoxAct extends Component {

  componentDidMount(){
    this.props.addClient()
    this.props.loginUser()

  }

  render() {

    return(
      <div>
        <ClientInput addClient={this.props.addClient}/>
        <Login loginUser={this.props.loginUser} />
        {/* <TalentsContainer /> */}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addClient: client => dispatch({ type: 'ADD_CLIENT', client}),
    loginUser: user => dispatch({type: 'LOGIN_USER', user})
  }
}


export default connect(null,  mapDispatchToProps)(VoxAct)