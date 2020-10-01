import React, { Component } from 'react';

class Login extends Component {

  state = {
    loginForm: {
      email: "",
      password: ""
    },
    clientForm: {
      id: '',
      name: '',
      hometown: '',
      email: '',
      password: ''
    }
  }


  handleLoginInputChange = event => {
    this.setState({ 
      [event.target.name]: event.target.value, },
    () => {console.log('this is state', this.state)}
    )
  }


  handleLoginOnSubmit = event => {
    event.preventDefault()
    const user = { ...this.state.loginForm }
    const client = { ...this.state.clientForm }
    this.props.loginUser(user)
    this.props.addUser(client)
    this.props.deleteUser(client)    
    this.setState({
      loginForm: {
        email: "",
        password: ""
      },
      clientForm: {
        id: '',
        name: '',
        hometown: '',
        email: '',
        password: ''
      }
    })
    console.log('you clicked', this.event) 
  }

//   const LoginUser = ({ 
//     handleLoginInputChange, 
//     handleLoginOnSubmit, 
//   }) => {

    render() {
      return (
        <div className="Login">
          Existing client... just sign in.

          <form onSubmit={this.handleLoginOnSubmit}>
            <input
              type="email"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.handleLoginInputChange}
              placeholder="email"
            />
            <br />

            <input
              type="text"
              name="password"
              id="password"
              placeholder="password"
              onChange={this.handleLoginInputChange}
              value={this.state.password}
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
