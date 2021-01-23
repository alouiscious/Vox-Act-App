import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewPhoto } from "../../actions/userActions";
import { fetchClient } from "../../actions/userActions"

class UserAddDetails extends Component {
  state = {
    upph: '', 
  }

  handleUserInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
}
  
  handleUserOnSubmit = event => {
    event.preventDefault()
    const user = ({
      upph: this.state.upph, 
    })
    console.table('wa ha input talent', this.state)
    console.table('user upid', this.state.upid, this.state.id)
    
    this.props.addNewPhoto(user)
    .then(id => {
      this.props.history.push(`/Users/${id}`)
    })

    this.setState({
      upph: ''
    })
  }
  render(){
    return ( 
      <div className={"UpphInput"}>
      <form onSubmit={this.handleUserOnSubmit}>
        
      {console.table('upph from userAddDetails', this.upph)}
        <br />
        
        <label htmlFor="upph"> Add Photo </label>
          <input 
            type="file"
            id="upph"
            name="upph"
            value={this.state.upph}
            onChange={this.handleUserInputChange}
            placeholder="User Photo Link"
          />
      </form>
    </div> 
    )
  }
}
export default connect(null, {addNewPhoto, fetchClient})(UserAddDetails)


