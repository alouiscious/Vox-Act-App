import React, { Component } from "react";
import {v4 as uuid} from 'uuid'
import { connect } from "react-redux";
import { addUser } from "../../actions/userActions";
import { addUser } from "../../actions/userActions";

class UserInput extends Component {

  state = {
    user_name: '',
    hometown: '',
    email: '',
    password: '',
    cpid: '',
    photo: ''
    
  }

  handleUserOnChange = event => {
    this.setState({ 
      [event.target.name]: event.target.value
    })
  }
    
  handleUserOnSubmit = event => {
    event.preventDefault()
    console.log('wa ha input user', this.state)
    const user = ({
      user_name: this.state.user_name,
      hometown: this.state.hometown, 
      email: this.state.email,
      cpid: uuid(),
      photo: this.state.photo
    })     
    
    const user = ({
      email: this.state.email, 
      password: this.state.password
    })

    this.props.addUser(user)
    .then( () => {
      return this.props.addUser(user)
    })
    .then(() => {
      this.props.history.push('/UserPage')
    })
    
    this.setState({
      user_name: '', 
      hometown: '', 
      email: '', 
      password: '',
      cpid: '',
      photo: ''
    })
    

  }

  render() {
    return (
      <div className="User">
        New users, create an account here
      
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
            type="file"
            name="photo"
            id="photo"
            onChange={this.handleUserOnChange}
            value={this.state.photo}
            placeholder="Add a Bio Photo"
          />
          <br />

          <input 
            type="submit" 
            value="UserInput"
          />
        </form>
      </div>
    )
  }
}

export default connect(null, {addUser, addUser})(UserInput);