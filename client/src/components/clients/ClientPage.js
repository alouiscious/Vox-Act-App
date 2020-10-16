import React from 'react'
// import Clients from "./Clients";
// import Talents from "../talents/Talents";
import {Client} from "../clients/Client";
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';

// this.props.componentDidMount() (
//   this.props.getClients(),
//   this.props.getTalents()
// )

const ClientPage = ({loading, clients, hasErrors}) => {
  console.log('wa ha this from client page', clients)

  const renderClient = () => {
    if (loading) return <p>Laoding Client...</p>
    if (hasErrors) return <p>Unable to display Client.</p>
   
      return (
        clients.map((client, id) => 
             <Client key={client.id}
              client={client.clientName /client.hometown}
              email={client.email}
              // deleteClient={deleteClient}
            /> 
        
        // client.talents.map((talent, id) => (
        //   <div>
        //     <li key={id}>{talent}</li>),
    
        //     <Link to="/talents" className="button">
        //       view talents
        //     </Link>
        //     <Link to="/talentInput"
        //       addTalent={this.props.addTalent}>
        //         add talent
        //     </Link>
        //     <button onClick={this.handleOnClick}> Remove Talent</button>
        //     <Clients
        //       clients={clients}
        //     />
        //   </div>
        // ))
      )
    )
  }
    
    return (
      <div>
        {renderClient}
      </div>
    )
}

   
const mapStateToProps = state => ({ 
  loading: state.posts.loading,
  clients: state.clients,
  hasErrors: state.clients.hasErrors,
  numberOfClients: state.clients.length
})

const mapDispatchToProps = dispatch => ({
  addClient: ({id, clientName, hometown, email, password}) => dispatch({
    type: 'ADD_CLIENT', 
    id, 
    clientName, 
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