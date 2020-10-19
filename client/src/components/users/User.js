import React, { Component } from "react";
import TalentInput from "../talents/TalentInput";
import { connect } from "react-redux";
import { addUserPhoto } from "../../actions/userActions";

class User extends Component {

  handleUserOnChange = event => {
    this.setState({ 
      [event.target.name]: event.target.value
    })
  }
    
  handleUserOnSubmit = event => {
    event.preventDefault()
    console.log('wa ha input user', this.state)
    const userPhoto = ({
      upph: this.state.upph
    })     

    this.props.addUserPhoto(userPhoto)
    .then( () => {
      return this.props.addUserPhoto(userPhoto)
    })
    .then(() => {
      this.props.history.push('/UsersPage')
    })
    
    this.setState({
      user_name: '', 
      hometown: '', 
      email: '', 
      password: '',
      upid: '',
      upph: ''
    })
    

  }

    render = ({user}) => {
      return (
      <div className="user-details">
        <h3>
          Welcome to Vox Act {user.user_name}!
        </h3>
        <p>You're joining us from {user.hometown}</p>
        <br/>
        <p>We plan to connect your talents with {user.email}</p>
  
        <p>please add your profile photo.</p>
          
        <form onSubmit={this.handleUserOnSubmit}>
        <br />
            <input
              type="file"
              name="upph"
              id="upph"
              onChange={this.handleUserOnChange}
              value={this.state.upph}
              placeholder="Add a Bio Photo"
            />
            <br />
            <input 
              type="submit" 
              value="UserInput"
            />
          </form>

          Let start by adding a talent.
          Complet this form
      </div>
    )
  }
}


export default connect(null, addUserPhoto)(User)