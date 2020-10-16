import React, { useEffect } from "react";
import { connect } from 'react-redux';
import  {getClients} from '../../actions/clientActions';
import  {getTalents}  from "../../actions/talentActions";
import {Client} from "../clients/Client";

const Clients = ({dispatch, loading, clients, hasErrors, numberOfClients }) => {
  useEffect(() => {
    dispatch(getClients(), getTalents())
  },[dispatch])
  
  const countClients = numberOfClients
  
  const renderClient = () => {
    if (loading) return <p>Laoding Client...</p>
    if (hasErrors) return <p>Unable to display Client.</p>
    return clients.map((client) => 
        <Client key={client.id} 
          client={client.clientName /client.hometown}
          email={client.email}
        />
    )
  }
          // deleteClient={deleteClient}
        
      
      

      // client.talents.map((talent, id) => {
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
      // })
    
     
      return (
        <div>
          <h1>Client List</h1>
          {renderClient()}
          <p>{countClients}</p>
        </div>
      )   

      }


// Map Redux state to React component props
const mapStateToProps = (state) => ({
  loading: state.clients.loading,
  clients: state.clients.clients,
  hasErrors: state.clients.hasErrors,
  numberOfClients: state.clients.count,

})      
// Connect Redux to React
export default connect(mapStateToProps)(Clients)
