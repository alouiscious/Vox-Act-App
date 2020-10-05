import React, { Component } from "react";
import Talent from './Talent'

class Talents extends Component {
  
  render() {
    const { talents, clientId, deleteTalent } = this.props
    const associatedTalents = Talents.filter(talent => talent.clientId === clientId)
    const talentList = associatedTalents.map((talent, index) => {
    // const talentList = talents.map(talent => {(talent.clientId === clientId), talent, index
        return (
        <Talent 
          key={index} 
          talent={talent} 
          deleteTalent={deleteTalent} 
        />
      )
    })

    return (
      <div>
        <ul>
          {talentList}
        </ul>
      </div>
    )
  }

}
export default Talents