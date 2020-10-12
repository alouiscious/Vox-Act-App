import React, { Component } from "react";
import {v4 as uuid} from 'uuid'
import { connect } from "react-redux";
import { addUser } from "../../actions/userActions";
import { addClient } from "../../actions/clientActions";

class ClientInput extends Component {

  state = {
    client_name: '',
    hometown: '',
    email: '',
    password: '',
    cpid: '',
    photo: ''
    
  }

  handleClientOnChange = event => {
    this.setState({ 
      [event.target.name]: event.target.value
    })
  }
    
  handleClientOnSubmit = event => {
    event.preventDefault()
    console.log('wa ha input client', this.state)
    const client = ({
      clientName: this.state.client_name,
      hometown: this.state.hometown, 
      email: this.state.email,
      cpid: uuid(),
      photo: this.state.photo
    })     
    
    const user = ({
      email: this.state.email, 
      password: this.state.password
    })

    this.props.addClient(client).then( () => {
      return this.props.addUser(user)
    }).then(() => {
      this.props.history.push('/ClientPage')
    })
    
    this.setState({
      client_name: '', 
      hometown: '', 
      email: '', 
      password: '',
      cpid: '',
      photo: ''
    })
    

  }

  render() {
    return (
      <div className="Client">
        New clients, create an account here
      
        <form onSubmit={this.handleClientOnSubmit}>
          <input
            type="text" 
            name="client_name"
            id="clientName"
            onChange={this.handleClientOnChange}
            value={this.state.client_name}
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
            type="file"
            name="photo"
            id="photo"
            onChange={this.handleClientOnChange}
            value={this.state.photo}
            placeholder="Add a Bio Photo"
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

export default connect(null, {addClient, addUser})(ClientInput);