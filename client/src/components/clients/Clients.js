import React from "react";
import {
  BrowserRouter as Route
} from 'react-router-dom';
import ClientPage from './ClientPage';
import { connect } from 'react-redux';
import { getClients } from "../../actions/clientActions";


const Clients = () => {
 
  const { clients, deleteClient } = this.getClients

  console.log('Wa Ha Clients', clients)

  return (
    <div>
      <h1>Clients' List</h1>
      Client Count: {this.props.numberOfClients}
  <ul>
    {clients}
  </ul>
        <ul>
            {clients.map((client, id) => 
              <div> key={id} 
                <Route exact path="./ClientPage" component={ClientPage}>
                <h4>Clients: {client.name}, {client.hometown}</h4>
                </Route>
                <button type="text" value={deleteClient}>Delete Client</button>
                {client.talents.map((talent, id) => (
                  <li key={id}>{talent}</li>
                ))}
              </div>
            )}
        </ul>
    </div>
  )
}


export default connect(null, getClients)(Clients)
