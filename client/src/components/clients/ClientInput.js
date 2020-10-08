import React, { Component } from "react";
import {v4 as uuid} from 'uuid'

class ClientInput extends Component {

  state = {
      // id: '',
    name: '',
    hometown: '',
    email: '',
    password: ''
  }

  handleClientOnChange = event => {
    this.setState({ 
      [event.target.name]: event.target.value
    })
  }
    
  handleClientOnSubmit = event => {
    event.preventDefault()
    console.log('wa ha input client', this.state)
    const client = {...this.state, id: uuid()}
    this.props.addClient(client)

    const user = ({email: this.state.email, password: this.state.password})
    this.props.addUser(user)

    this.setState({
      id: '',
      name: '', 
      hometown: '', 
      email: '', 
      password: '' 
    })

  }


  render() {
    return (
      <div className="Client">
        New clients, create and account here
      
        <form onSubmit={this.handleClientOnSubmit}>
          <input
            type="text" 
            name="name"
            id="name"
            onChange={this.handleClientOnChange}
            value={this.state.name}
            placeholder="Enter Your Full Name"
          />
          <br />
          <input
            type="text" 
            name="hometown"
            id="hometown"
            onChange={this.handleClientOnChange}
            value={this.state.hometown}
            placeholder="Enter Your Hometown"
          />
          <br />
          <input
            type="text"
            name="email"
            id="email"
            onChange={this.handleClientOnChange}
            value={this.state.email}
            placeholder="email"
          />
          <br />

          <input
            type="text"
            name="password"
            id="password"
            onChange={this.handleClientOnChange}
            value={this.state.password}
            placeholder="password"
          />

          <br />

          <input 
            type="submit" 
            value="ClientInput"
          />
        </form>
      </div>
    )
  }
}

export default ClientInput