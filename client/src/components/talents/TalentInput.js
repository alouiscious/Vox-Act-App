import React, { Component } from "react";
import { connect } from "react-redux";
import addTalent from "../../actions/talentActions"

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
  
  handleTalentInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      user_name: this.user.user_name,
      upid: this.user.user.upid
    })
  }
  
  handleTalentOnSubmit = event => {
    event.preventDefault()
    const user = ({
      upid: this.user.upid, 
      user_name: this.user.user_name
    })
    const talent =  this.state
    console.log('wa ha input talent', this.state)
    console.log('user current', this.session.upid, this.user.user.id)
    
    this.props.addTalent(talent, user)
    .then(() => {
      this.props.history.push('/Talents')
    })
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
        Complete this form and add your Talent, {this.state.user_name}!
       
        <form onSubmit={this.handleTalentOnSubmit}>
          <label htmlFor="talent_style">Choose your talents...</label>
          <input 
            type="text"
            name="title"
            id="title"
            value={this.state.title}
            onChange={this.handleTalentInputChange}
            placeholder="Talent Title"
          />
          <select 
              value={this.state.talent_style}
              onChange={this.handleTalentInputChange}
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
                onChange={this.handleTalentInputChange}
                value={this.state.user_name}
                placeholder={this.state.user_name}
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

export default connect(null, {addTalent})(TalentInput)