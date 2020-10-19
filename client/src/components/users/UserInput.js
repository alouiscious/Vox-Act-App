import React, { Component } from "react";
import {v4 as uuid} from 'uuid'
import { connect } from "react-redux";
import { addUser, loginUser } from "../../actions/userActions";

class UserInput extends Component {

  state = {
    user_name: '',
    hometown: '',
    email: '',
    password: '',
    upid: ''
    
  }

  handleUserOnChange = event => {
    this.setState({ 
      [event.target.name]: event.target.value
    })
  }
    
  handleUserOnSubmit = event => {
    event.preventDefault()
    const user = ({
      user_name: this.state.user_name,
      hometown: this.state.hometown, 
      email: this.state.email,
      upid: (uuid()),
      password: this.state.password
    })     
    console.log('wa ha input user', this.state)
    
    const login = ({
      upid: this.state.upid,
      password: this.state.password,
      email: this.state.email, 
    })

    this.props.addUser(user)
    .then( () => {
      return this.props.loginUser(login)
    })
    .then(() => {
      this.props.history.push('/Users')
    })
    
    this.setState({
      user_name: '', 
      hometown: '', 
      email: '', 
      password: '',
      upid: ''
    })
  }

  render() {
    return (
      <div className="UserInput">
        New Clients, please create an account here
      
        <form onSubmit={this.handleUserOnSubmit}>
          <input
            type="text" 
            name="user_name"
            id="userName"
            onChange={this.handleUserOnChange}
            value={this.state.user_name}
            placeholder="Enter Your Full Name"
          />
          <br />
          <input
            type="text" 
            name="hometown"
            id="hometown"
            onChange={this.handleUserOnChange}
            value={this.state.hometown}
            placeholder="Enter Your Hometown"
          />
          <br />
          <input
            type="text"
            name="email"
            id="email"
            onChange={this.handleUserOnChange}
            value={this.state.email}
            placeholder="email"
          />
          <br />

          <input
            type="text"
            name="password"
            id="password"
            onChange={this.handleUserOnChange}
            value={this.state.password}
            placeholder="password"
          />
          <br />
          <input 
            type="submit" 
            value="Create Client Profile"
          />
        </form>
      </div>
    )
  }
}

export default connect(null, {addUser, loginUser})(UserInput);