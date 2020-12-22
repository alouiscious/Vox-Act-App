import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/userActions";
import { addUsers } from "../../actions/usersActions";
import {v4 as uuid} from 'uuid'

class UserInput extends Component {

  state = {
    user_name: '',
    hometown: '',
    email: '',
    password: '',
    upid: (uuid()),
    upph: ''
    
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
      upid: this.state.upid,
      password: this.state.password,
      upph: this.state.upph
    })     
    console.table('wa ha Userinput state', this.state)
    
    const login = ({
      email: this.state.email, 
      password: this.state.password,
    })

    console.table('wa ha props user', this.props)
    this.props.addUsers(user)
    .then(userJSON  => {
      console.table('wa ha input user', userJSON)
      return this.props.loginUser(login)
    })
    .then(clientJSON => {
      console.table('wa ha userafter login', clientJSON)
      this.props.history.push(`/UserPage/${clientJSON.payload.id}`)
    })
    
    this.setState({
      user_name: '', 
      hometown: '', 
      email: '', 
      password: ''
    })
  }

  render() {
    return (
      <div className="UserInput">
        <br />
        Create NEW VoxAct
      
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
            type="email"
            name="email"
            id="emailCreate"
            onChange={this.handleUserOnChange}
            value={this.state.email}
            placeholder="email"
          />
          <br />

          <input
            type="password"
            name="password"
            id="passwordCreate"
            onChange={this.handleUserOnChange}
            value={this.state.password}
            placeholder="password"
          />
          <br />
          <input 
            type="submit" 
            value="Create Act Vox Profile"
          />
        </form>
      </div>
    )
  }
}

export default connect(null, {addUsers, loginUser})(UserInput);