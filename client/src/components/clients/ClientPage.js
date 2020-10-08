import React, { Component } from 'react'
import ClientInput from './ClientInput'
import Clients from "./Clients";
// import Talents from "../talents/Talents";
// import { Route } from 'react-router-dom';
import { connect } from "react-redux";


class ClientPage extends Component {

  componentDidMount(){
    this.props.getClients()
    this.props.getTalents()
  }

  render(){

     let clients = this.props.clients.map((client, index) => 
      <li key={index}>
        {client.name},{client.hometown}
        {client.email}
      </li>
      )
    
    console.log('wa ha talent props', this.props)

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


          <button onClick={this.handleOnClick}> Remove Talent</button>


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

// export default ClientPage

export default connect(mapStateToProps, mapDispatchToProps)(ClientPage)