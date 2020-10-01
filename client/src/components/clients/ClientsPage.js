import React, { Component } from 'react'
import ClientInput from './clients/ClientInput'
import Clients from "./clients/Clients";
// import { Route } from 'react-router-dom';
import { connect } from "react-redux";


class ClientsPage extends Component {

  componentDidMount(){
    // this.props.fetchUsers()
    // this.props.fetchClients()
  }

  render(){
     let clients = this.props.clients.map((client, index) => 
    <li key={index}>
      {client.name},{client.hometown}
      {client.email}
    </li>)
    

  return (
      <div>
          <ClientInput addClient={this.props.addClient}/>
            
              <Clients
                // clients={clients} 
                clients={this.props.clients}
                deleteClient={this.props.deleteClient}
              />
        
          Client Count: {this.props.numberOfClients}
          <ul>
            {clients}
          </ul>

    

        </div>
      )
  } 
  }


const mapStateToProps = state => ({ 
  clients: state.clients,
  numberOfClients: state.clients.length
})

const mapDispatchToProps = dispatch => ({
  addClient: ({id, name, hometown, email, password}) => dispatch({
    type: 'ADD_CLIENT', 
    id, 
    name, 
    hometown, 
    email,
    password
  }),
  deleteClient: id => dispatch({
    type: 'DELETE_CLIENT', 
    id
  })
})

// export default ClientsPage

export default connect(mapStateToProps, mapDispatchToProps)(ClientsPage)