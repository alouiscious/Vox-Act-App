import React, { Component } from "react";

class TalentInput extends Component {
  state = {
    talentStyle: '', 
    user_name: '', 
    upid: '', 
    title: '', 
    description: '',
    phmf: '',
    vimf: '',
    aumf: ''
  }
  
  handleTalentOnChange = event => {
    console.log('user current', this.session.upid, this.user.user.id)
    this.setState({
      [event.target.name]: event.target.value,
      user_name: this.user.user.user_name,
      userId: this.user.user.id
    })
  }

  handleTalentOnSubmit = event => {
    event.preventDefault()
    const user = {upid: this.upid, user_name: this.user_name}
    const talent =  this.state
    console.log('wa ha input talent', this.state)
    this.props.addTalent(talent, user)
    this.setState({
      talent_style: '', 
      user_name: '', 
      upid: '', 
      title: '', 
      description: '',
      aumf: '',
      phmf: '',
      vimf: ''
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