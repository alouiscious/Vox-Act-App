import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchUsers } from '../../actions/usersActions'
import { loginUser } from '../../actions/userActions';
import { Link } from 'react-router-dom';

class Login extends Component {

  state = {
    email: "",
    password: "",
    
  }

  handleLoginInputChange = event => {
    this.setState({ 
      [event.target.name]: event.target.value,
    })
  }
    
  handleLoginOnSubmit = event => {
    event.preventDefault()
    console.table('handleSubmit shape of state', this.state)

    const user = ({ 
      email: this.state.email,
      password: this.state.password,
    })

    console.table('user after loginUser action', user)
    this.props.loginUser(user)
    .then((loginJSON) => {
      console.log("before or after",`${loginJSON.payload.id}`)
      // this.props.history.push(`/UserPage/`)
      this.props.history.push(`/UserEditPage/${loginJSON.payload.id}`)
    })
  
    this.setState({
      email: "",
      password: ""
    })
  }
  
  render() {
      return (
        <div className="Login">
          Sign In  
          <br />
          <form onSubmit={this.handleLoginOnSubmit}>
            <input
              type="email"
              name="email"
              id="email"
              onChange={this.handleLoginInputChange}
              value={this.state.email}
              placeholder="email"
            />
            <br />
            {/* <label htmlFor="password">Password</label> */}
            <input
              type="text"
              name="password"
              id="password"
              onChange={this.handleLoginInputChange}
              value={this.state.password}
              placeholder="password"
            />
            <br />
            <input 
              type="submit" 
              value="Act Vox Login"
            /> 
          </form>
          <br />
          New VoxAct User... <Link to={`/UserInput`}> Sign Up </Link> Here
        </div>
      )
    }
  }

export default connect(null, {fetchUsers, loginUser})(Login)
