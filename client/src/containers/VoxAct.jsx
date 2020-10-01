import { Component } from "react";
import { connect } from "react-redux";
import ClientsPage from "../components/clients/ClientsPage";
import Login from '..components/users/Login '

class VoxAct extends Component {

  render() {
    return(
      <div>
        <ClientsPage addUser={this.props.addUser} />
        <Login loginUser={this.props.loginUser} />
      </div>
    )
  }
}

mapDispatchToProps = dispatch => {
  return{
    addUser: client => dispatch({ type: 'ADD_CLIENT', client}),
    loginUser: user => dispatch({ type: 'LOGIN_USER', user}),
    deleteUser: id => dispatch({ type: 'DELETE_CLIENT', id}) 
  }
}
export default connect(null, )(VoxAct)