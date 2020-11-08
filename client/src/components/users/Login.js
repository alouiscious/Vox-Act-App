import React, { Component } from 'react';
import { connect } from "react-redux";
import { loginUser } from '../../actions/loginActions';

class Login extends Component {

  state = {
    id: "",
    email: "",
    password: ""
    
  }

  handleLoginInputChange = event => {
    this.setState({ 
      [event.target.name]: event.target.value
    })
  }
    
  handleLoginOnSubmit = event => {
    event.preventDefault()
    const user = ({
      email: this.state.email,
      password: this.state.password
    })
    
    console.log('this is state', this.state)
    this.props.loginUser(user)
    .then( () => {
      this.props.history.push('/UserPage/:id')
    })

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

export default connect(null, {loginUser})(Login)
