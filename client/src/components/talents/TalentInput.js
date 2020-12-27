import React, { Component } from "react";
import { connect } from "react-redux";
// import { loginUser } from '../../actions/userActions'
import { addNewTalent } from "../../actions/talentActions"

class TalentInput extends Component {
  state = {
    talentStyle: '', 
    user_name: '', 
    upid: ``, 
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
    const user = ({
      upid: this.current_user.upid, 
      user_name: this.state.user_name
    })
    const talent = this.state
    console.table('wa ha input talent', this.state)
    console.table('user current', this.state.upid, this.user.user.id)
    
    this.props.addNewTalent(
      talent, 
    )
    .then(() => {
      this.props.history.push('/Talents')
    })

    this.setState({
      talent_style: '', 
      user_name: user.user_name, 
      upid: this.user.upid, 
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

            <br />
            <label htmlFor="user_name">Client Name: </label>
              <input 
                type="text" 
                name="user_name"
                id="userName"
                defaultValue={this.state.user_name}
                readOnly={this.state.user_name}
              />

          <br />
          <label htmlFor="description"> Description </label>
          <input 
            type="textarea" 
            name="description"
            id="description"
            value={this.state.description}
            onChange={this.handleTalentInputChange}
            cols={400} 
            rows={100}
            // wrap={1}
            // required={1}
            placeholder="Provide Description"
          />

          <br />
          <label htmlFor="upid"> Talent Key </label>
          <input 
            type="text"
            id="upid"
            defaultValue={this.state.upid}
            readOnly={this.state.upid}
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

export default connect(null, {addNewTalent})(TalentInput)