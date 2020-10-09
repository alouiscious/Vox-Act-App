import React from "react";
import { getTalents } from "../../actions/talentActions";
import { getClients } from "../../actions/clientActions";


const Talents = () => {
  const clients = {getClients}
  const { talents, deleteTalent } = {getTalents}

  console.log('Wa Ha Talents', talents)

    // const associatedTalents = talents.filter_by(talent => 
    //   talent.client.id === this.props.client.id
    //   )
    // const clientTalents = associatedTalents.map(talent => {
    //     (talent.clientId === this.props.clientId), 
    //     talent, 
    //     index
    return (
      <div>
        <h1> Talents' List</h1>
      {clients.map((client, index) => 
      <div> key={index} 
        
        <h4> Client: {client.name}, {client.hometown}</h4>
        <p>Talents:</p>
        <ul>
              {client.talents.map((talent, index) => 
                  <li key={index}>{talent}
                    <button type="text" value={deleteTalent}>Delete Talent</button> 
                  </li>
              )}
          </ul>
      </div>
      )}
    </div>
  )
  
}

export default Talents