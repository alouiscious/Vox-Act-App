import React, { Component } from 'react';

class Login extends Component {

  state = {
    currentUser: null,
    loginForm: {
      email: "",
      password: ""
    }
  }

  handleLoginInputChange = event => {
    this.setState({ 
      [event.target.name]: event.target.value, },
    () => {console.log('this is state', this.state.loginForm)}
    )
  }

  handleLoginOnSubmit = event => {
    event.preventDefault()
    const user = { ...this.state.loginForm }
    this.props.loginUser(user)
  
    this.setState({
        email: "",
        password: ""
    })
  }
  
  render() {
      return (
        <div className="Login">
          Existing client... just sign in.

          <form onSubmit={this.handleLoginOnSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.handleLoginInputChange}
              placeholder="email"
            />
            <br />
            <label htmlFor="password">Password</label>
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
              value="Login"
            />
          </form>
        </div>
      )
    }
  }

export default Login
