import React, { Component } from "react";
import TalentInput from "./TalentInput";
import Talents from "./Talents";
import { connect } from "react-redux";

class Talent extends Component {

  handleDeleteOnClick = () => {
    this.props.deleteTalent(this.props.talent.id)
  }

  render() {
    let talents = this.props.talents.map((talent, index) =>
    <li key={index}>
    {talent.talent_style} 
    {talent.client_name} 
    {talent.client_id} 
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
    id, talent_style, client_name, client_id, title, media_URL, mfid
  }) => dispatch({
    type: 'ADD_TALENT',
    id, talent_style, client_name, client_id, title, media_URL, mfid
  }),
  deleteTalent: id => dispatch({type: 'DELETE_TALENT', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(Talent)