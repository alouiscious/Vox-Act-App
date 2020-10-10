const CLIENTURL = "http://localhost:3000/clients"

export const addClient = (client) => {
  
  console.log('Client from actions', client)

  return (dispatch) => {
    const configClient = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({
        client: client
      })
    }
    
    fetch(CLIENTURL, configClient)
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


export function getClients(clients) {
  return (dispatch) => {
    fetch(CLIENTURL)
    .then(resp => resp.json())
    .then(clientJSON => {
      dispatch({ type: 'GET_CLIENTS', clients: clientJSON.clients})
      console.log('Client from actions', clients)
    })
    .catch(console.log)   
  }
}

export default {addClient, getClients}