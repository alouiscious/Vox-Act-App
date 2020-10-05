import React, { Component } from "react";
import {v4 as uuid} from 'uuid'

class TalentInput extends Component {
  state = {
    talent_style: '', 
    client_name: '', 
    client_id: '', 
    title: '', 
    media_URL: ''
    // mfid:
  }
  
  handleTalentOnChange = event => {
    console.log('client current', this.session.id, this.client.client.id)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleTalentOnSubmit = event => {
    event.preventDefault()
    const client = {client_id: this.client_id, client_name: this.client_name}
    const talent = { ...this.state, mfid: uuid()}
    console.log('wa ha input talent', this.state)
    this.props.addTalent(talent, client)
    this.setState({
      talent_style: '', 
      client_name: '', 
      client_id: '', 
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
                name="clientName"
                id="clientName"
                onChange={this.handleTalentOnChange}
                value={this.client.id.name}
                placeholder={this.client.id.name}
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