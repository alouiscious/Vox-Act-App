
export function addClient(client) {
  // const client = ({...this.state.clientForm, id: uuid()})
  console.log('Client from actions', client)

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
    
    fetch("http://localhost:3000/clients", configClient)
    .then(resp => resp.json())
    .then(clientJSON => {
      if (clientJSON.error) {
        alert("Already a Vox Act Client")
      } 
      else {
        dispatch({ type: 'ADD_CLIENT', client: clientJSON})
        dispatch({ type: 'ADD_USER', user: clientJSON})
      }
    })
    .catch(console.log)   
  }
}



export function getClients(clients) {
  // const client = ({...this.state.clientForm, id: uuid()})

  return (dispatch) => {
    fetch("http://localhost:3000/clients")
    .then(resp => resp.json())
    .then(clientJSON => {
      if (clientJSON.error) {
        alert("Already a Vox Act Client")
      } 
      else {
        dispatch({ type: 'GET_CLIENTS', clients: clientJSON.clients})
        console.log('Client from actions', clients)

      }
    })
    .catch(console.log)   
  }

}

export default {addClient, getClients}