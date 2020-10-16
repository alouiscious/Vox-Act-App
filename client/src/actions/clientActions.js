
const CLIENTURL = "http://localhost:3000/clients"

export const ADD_CLIENT = 'ADD_CLIENTS'
export const ADD_CLIENT_SUCCESS = 'ADD_CLIENTS_SUCCESS'

export const addClient = (client) => {
  
  return async (dispatch) => {
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
    console.log('addClient from addClient (16)', client)
    
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

export const GET_CLIENTS = 'GET_CLIENTS'
export const fetchClients = () => ({
  type: GET_CLIENTS,
})
export const GET_CLIENTS_SUCCESS = 'GET_CLIENTS_SUCCESS'
export const getClientSuccess = (clients) => ({
  type: GET_CLIENTS_SUCCESS,
  payload: clients,
})
export const CLIENT_ACTION_FAILURE = 'CLIENT_ACTION_FAILURE'
export const clientActionFailure = () => ({
  type: CLIENT_ACTION_FAILURE,
})
export function getClients() {
  return async (dispatch) => {
    dispatch(fetchClients())

    try {
      fetch(CLIENTURL)
      .then(resp => resp.json())
      // (clientJSON => await resp.json())
      .then((clientJSON) => {
        dispatch(getClientSuccess(clientJSON))
        console.log('getClients from actions', clientJSON.clients)
      })
    }
    catch (error) {  
      alert('No clients available')
      dispatch(clientActionFailure())
    }
  }

}
    

export default {addClient, getClients}