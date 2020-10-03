
export function addClient(client) {
  // const client = ({...this.state.clientForm, id: uuid()})
  
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
    
    fetch("http://localhost:3000/clients", configClient)
    .then(resp => resp.json())
    .then(clientJSON => {
      if (clientJSON.error) {
        alert("Already a Vox Act Client")
      } 
      else {
        dispatch({ type: 'ADD_CLIENT', client: clientJSON})
        this.props.addClient(client)
        this.setState(
          { client: clientJSON.client })
      }
    })
    .catch(console.log)   
  }

}

// export default addClient