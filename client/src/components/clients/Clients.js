import React, { Component } from "react";
import ClientPage from './ClientPage'
import { connect } from 'react-redux'
import { addClient, getClients } from "../../actions/clientActions";


class Clients extends Component {
  
  clientList = () => {
    const { clients, deleteClient } = this.props 
    console.log('Wa Ha Clients', clients)
    return this.props.clients.map(client => 
      <ClientPage 
        key={client.id}
        clientName={client.name}
        clientHometown={client.hometown}
        deleteClient={deleteClient}
      />
      
      // <clientImg 
      //   key={client.id} 
      //   src={client.url} 
      //   alt={"client profile photo"}
      //   />
    )
  }
    
    render() {
      return (
      <ul>
         {this.clientList()}
      </ul>
    )
    
  }
}

export default connect(null, getClients, addClient)(Clients)