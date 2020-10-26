import React, { Component } from "react";
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
      upid: this.state.upid,
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
      this.props.history.push('/User')
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
            value="Create Client Profile"
          />
        </form>
      </div>
    )
  }
}

export default connect(null, {addUser, loginUser})(UserInput);