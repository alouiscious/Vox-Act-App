import React, { Component } from "react";


class ClientInput extends Component {

  state = {
    currentUser: null,
    loginForm: {
      email: '',
      password: ''
    },
    clientForm: {
      id: '',
      name: '',
      hometown: '',
      email: '',
      password: ''
    }
  }

  handleClientOnChange = event => {
    this.setState({ 
      [event.target.name]: event.target.value, },
    () => {console.log('wa ha input state', this.state.clientForm)}
    )
  };

  handleClientOnSubmit = event => {
    event.preventDefault()
    const client = {...this.state, ...this.state.clientForm}
    // this.props.addUser(...this.state.userForm)
    this.props.addClient(client)    
    this.setState({
        // client
        [event.target.name]: ''
    })
  }


  render(handleClientOnChange, 
    handleClientOnSubmit, 
    // handleLoginInputChange, 
    name, 
    hometown, 
    email, 
    password ) {
    
  

    return (
      <div className="Client">
        New clients, create and account here
      
        <form onSubmit={handleClientOnSubmit}>
          <input
            type="text" 
            name="name"
            onChange={handleClientOnChange}
            value={name}
            placeholder="Enter Your Full Name"
          />
          <br />
          <input
            type="text" 
            name="hometown"
            onChange={handleClientOnChange}
            value={hometown}
            placeholder="Enter Your Hometown"
          />
          <br />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email"
            onChange={handleClientOnChange}
            value={email}
          />
          <br />

          <input
            type="text"
            name="password"
            id="password"
            placeholder="password"
            onChange={handleClientOnChange}
            value={password}
          />

          <br />

          <input 
            type="submit" 
            value="Create Account"
          />
        </form>
      </div>
    )
  }
}

  



export default ClientInput