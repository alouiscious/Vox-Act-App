import React, { Component } from "react";
import { connect } from "react-redux";
import { addUserPhoto } from "../../actions/userActions";

class UserAddDetails extends Component {
  state = {
    upph: '', 
  }

  
    
  handleTalentInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
}
  
  handleTalentOnSubmit = event => {
    event.preventDefault()
    const photo = ({
      upph: this.state.upph, 
    })
    console.table('wa ha input talent', this.state)
    console.table('user upid', this.state.upid, this.state.id)
    
    this.props.addUserPhoto(photo)
    .then(photoJSON => {
      this.props.history.push(`/UserEdit/${photoJSON.payload.id}`)
    })

    this.setState({
      upph: this.user.upph
    })
  }
  render(user){
  return <div className={user ? 'upph' : 'user'}>
    {console.table('wa ha user from user', user)}
      <br />
      <label htmlFor="upph"> Add Photo </label>
        <input 
          type="file"
          id="upph"
          name="upph"
          value={this.state.upph}
          onChange={this.handleTalentInputChange}
          placeholder="User Photo Link"
        />
  </div> 
  }
}
export default connect(null, {addUserPhoto})(UserAddDetails)


