import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewTalent } from "../../actions/talentActions"
import { fetchClient } from "../../actions/userActions"

class TalentInput extends Component {
  
  state = {
    talentStyle: '', 
    title: '', 
    description: '',
    phmf: '',
    vimf: '',
    aumf: ''
  }
  
  handleTalentInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      
    })
  }
  
  handleTalentOnSubmit = event => {
    event.preventDefault()

    const talent = ({ 
      talent_style: this.state.talentStyle,
      title: this.state.title,
      description: this.state.description,
      phmf: this.state.phmf,
      vimf: this.state.vimf,
      aumf: this.state.aumf
    })
    console.table('wa ha Talentinput state', this.state)
    
    this.props.addNewTalent(talent)
    .then(id => {
      this.props.history.push(`/Talents/${id}`)
    })
    console.table('wa ha state from talentinput', this.state)
    
    this.setState({
      talent_style: '', 
      title: '', 
      description: '',
      aumf: '',
      phmf: '',
      vimf: ''
    })
  }

  render(){
    return (
      <div className="TalentInput">
        Complete this form and add your Talent, {this.state.user_name}!
       
        <form onSubmit={this.handleTalentOnSubmit}>
          <div className="talentDetails">
          <label htmlFor="title">Define your talents: </label>
          
          <input 
            type="text"
            name="title"
            id="title"
            value={this.state.title}
            onChange={this.handleTalentInputChange}
            placeholder="Talent Title"
          />
          <label htmlFor="talent_style"> as </label>

          <select 
              value={this.state.talent_style}
              onChange={this.handleTalentInputChange}
            >
              <option
                value={"Actor"}
                name={"talent01"}
              >Actor</option>
              <option
                value={"Voice"}
                name={"talent02"}
              >Voice</option>
              <option
                value={"Model"}
                name={"talent03"}
              >Model</option>                        
            </select> 
            <br />

          <label htmlFor="description"> Description </label>
          <textarea 
            type="textarea" 
            name="description"
            id="description"
            value={this.state.description}
            onChange={this.handleTalentInputChange}
            cols={50} 
            rows={20}
            wrap={1}
            // required={1}
            placeholder="Provide Description"
          />

          <br />
        <label htmlFor="phmf"> Add Photo </label>
          <input 
            type="file"
            id="phmf"
            name="phmf"
            value={this.state.phmf}
            onChange={this.handleTalentInputChange}
            placeholder="Talent Photo Link"
          />
          <br />
          <label htmlFor="vimf"> Add Video </label>
          <input 
            type="file"
            name="vimf"
            id="vimf"
            value={this.state.vimf}
            onChange={this.handleTalentInputChange}
            placeholder="Talent Video Link"
          />
          <br />
          <label htmlFor="aumf"> Add Audio </label>
          <input 
            type="file"
            name="aumf"
            id="aumf"
            value={this.state.aumf}
            onChange={this.handleTalentInputChange}
            placeholder="Talent Audio Link"
          />
          <br />
          <br />
          </div>

            <input 
              type="submit"
              value="Create Talent"
            />

        </form>
      </div>
    )
  }
}


export default connect(null, {addNewTalent, fetchClient})(TalentInput)