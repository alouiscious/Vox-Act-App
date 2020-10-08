import React, { Component } from "react";
import TalentInput from "./TalentInput";
import Talents from "./Talents";
import { connect } from "react-redux";

class Talent extends Component {

  componentDidMount(){
    this.props.getClients()
    // this.props.getTalents()
  }

  handleDeleteOnClick = () => {
    this.props.deleteTalent(this.props.talent.id)
  }

  render() {
    let talents = this.props.talents.map((talent, index) =>
    <li key={index}>
    {talent.talentStyle} 
    {talent.client.clientName} 
    {talent.client.id} 
    {talent.title} 
    {talent.media_URL}
    {talent.mfid}
    </li>)
    console.log('wa ha talent props', this.props)
    return (
      <div>
        <li>
          <TalentInput addTalent={this.props.addTalent} />
          <Talents 
            talents={this.props.talents}
            deleteTalent={this.props.deleteTalent}
          />
          Talent Count: {this.props.talent.numberOfTalents}
          <ul>
            {talents}
          </ul>
        </li>
        <button onClick={this.handleOnClick}> Remove Talent</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  talents: state.talents,
  numberOfTalents: state.talents.length
})

const mapDispatchToProps = dispatch => ({
  addTalent: ({ 
    id, talentStyle, clientName, clientId, title, mediaURL, mfid
  }) => dispatch({
    type: 'ADD_TALENT',
    id, talentStyle, clientName, clientId, title, mediaURL, mfid
  }),
  deleteTalent: id => dispatch({type: 'DELETE_TALENT', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(Talent)