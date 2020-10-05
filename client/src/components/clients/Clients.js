import React, { Component } from "react";
import ClientPage from './ClientPage'
import { getClients } from ''


class Clients extends Component {

  render() {
    const Clients = ({match, getClients}) => (
      <div>
        <Clients clients={getClients} />
        <Route exact path={match.url} render={() => <h3>Choose a Client</h3>} />
        <Route path={'${match.url}/:clientId'} render={routerProps => <Clients {...routerProps} clients={clients} /> }/>
      </div>
    )
    const { getClients, deleteClient } = this.props 
    console.log('Wa Ha Clients', clients)
      const clientList = this.props.clients.map(client => {
        return (
          <ClientPage
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