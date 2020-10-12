
const CLIENTURL = "http://localhost:3000/clients"
export const addClient = (client) => {
  
  return (dispatch) => {
    const configClient = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        client: client
      })
    }
    console.log('client from addClient (16)', client)
    
   dispatch({type: 'LOADING_CLIENT'})

    return fetch(CLIENTURL, configClient)
    .then(resp => resp.json())
    .then(clientJSON => {
      dispatch({ type: 'ADD_CLIENT', client: clientJSON})
      if (clientJSON.error) {
        alert("Vox Act client creation not complete. - Please try again.")
      } 
    })
    .catch(console.log)   
  }
}


export const getClients = (clients) => {
  return (dispatch) => {
    return fetch(CLIENTURL)
    .then(resp => resp.json())
    .then(clientJSON => {
      dispatch({ type: 'GET_CLIENTS', clients: clientJSON.clients})
      console.log('Client from actions', clients)
    })
    .catch(console.log)   
  }
}

export default {addClient, getClients}