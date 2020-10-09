
export function addClient(client) {
  
  console.log('Client from actions', client)

  return (dispatch) => {
    const configClient = {
      method: "POST",
      headers: {
        "Content-Type": "application/on"
      },
      body: JSON.stringify({
        client: {client}
      })
    }
    
    fetch("http://localhost:3000/clients", configClient)
    .then(resp => resp.json())
    .then(clientJSON => {
      if (clientJSON.error) {
        alert("Already a Vox Act Client")
      } 
      else {
        dispatch({ type: 'ADD_CLIENT', client: clientJSON})
      }
    })
    .catch(console.log)   
  }
}


export function getClients(clients) {
  return (dispatch) => {
    fetch("http://localhost:3000/clients")
    .then(resp => resp.json())
    .then(clientJSON => {
      dispatch({ type: 'GET_CLIENTS', clients: clientJSON.clients})
      console.log('Client from actions', clients)
    })
    .catch(console.log)   
  }
}

export default {addClient, getClients}