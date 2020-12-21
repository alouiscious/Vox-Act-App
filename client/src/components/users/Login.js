import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchUsers } from '../../actions/usersActions'
import { loginUser } from '../../actions/userActions';

class Login extends Component {

  state = {
    id: "",
    email: "",
    password: "",
    
  }

  handleLoginInputChange = event => {
    this.setState({ 
      [event.target.name]: event.target.value,
      id: this.state.id,
    })
  }
    
  handleLoginOnSubmit = event => {
    event.preventDefault()
    console.table('loginSubmit shape of state', this.state)
    console.table(' shape of state.id', this.state.id)

    const user = ({ 
      id: this.state.id,
      email: this.state.email,
      password: this.state.password,
    })

    console.table('user after loginUser action', user)
    this.props.loginUser(user)
    .then((resp) => {
    
      console.log("before or after",`${resp.payload.id}`)
      this.props.history.push(`/UserPage/${resp.payload.id}`)
      // this.props.fetchClient(`${resp.payload.id}`)
    })
  
    this.setState({
      email: "",
      password: ""
    })
  }
  
  render() {
      return (
        <div className="Login">
          Sign In.

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

        </div>
      )
    }
  }

export default connect(null, {fetchUsers, loginUser})(Login)
