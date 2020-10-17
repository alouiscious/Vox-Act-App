import React, { Component } from "react";
import {v4 as uuid} from 'uuid'

class TalentInput extends Component {
  state = {
    talentStyle: '', 
    userName: '', 
    userId: '', 
    title: '', 
    mediaURL: ''
    // mfid:
  }
  
  handleTalentOnChange = event => {
    console.log('user current', this.session.id, this.user.user.id)
    this.setState({
      [event.target.name]: event.target.value,
      userName: this.user.user.userName,
      userId: this.user.user.id
    })
  }

  handleTalentOnSubmit = event => {
    event.preventDefault()
    const user = {user_id: this.user_id, user_name: this.user_name}
    const talent = { ...this.state, mfid: uuid()}
    console.log('wa ha input talent', this.state)
    this.props.addTalent(talent, user)
    this.setState({
      talent_style: '', 
      user_name: '', 
      user_id: '', 
      title: '', 
      media_URL: ''
    })
  }

  render(){
    return (
      <div className="Talent">
        Complete this form and add your Talent!
        <form onSubmit={this.handleTalentOnSubmit}>
          <label>Choose your talents...</label>
          <select 
              value={this.state.talent_style}
              onChange={this.handleTalentOnChange}
            >
           
              <option
                value="Actor"
                name='talent01'
              >Actor</option>
              <option
                value="Voice"
                name="talent02"
              >Voice</option>
              <option
                value="Model"
                name="talent03"
              >Model</option>                        
            </select> 
            <div className="talentDetails">
              <input 
                type="text" 
                name="user_name"
                id="userName"
                onChange={this.handleTalentOnChange}
                value={this.user.id.userName}
                placeholder={this.user.id.userName}
              />

            </div>
            <input 
              type="submit"
              value="TalentInput"
            />

        </form>
      </div>
    )
  }
}

export default TalentInput