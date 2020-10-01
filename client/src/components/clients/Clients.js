import React, { Component } from "react";
import Client from './Client'

class Clients extends Component {

  render() {
    const { clients, deleteClient } = this.props 
    console.log('Wa Ha Clients', clients)
      const clientList = this.props.clients.map(client => {
        return (
          <Client
            key={client.id}
            clientName={client.name}
            deleteClient={deleteClient}
          />
        )
      })

    return (
      <ul>
         {clientList}
      </ul>
    )
    
  }
}

export default Clients