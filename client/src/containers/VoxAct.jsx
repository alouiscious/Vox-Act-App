import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Login from '../components/users/Login'
import UserInput from '../components/users/UserInput'
import { getUsers } from "../actions/usersActions";
import { addUser } from "../actions/usersActions";
import { loginUser } from "../actions/usersActions";
import { connect } from "react-redux";

class VoxAct extends Component {

  componentDidUpdate() {
    // this.props.getUsers()
    // this.props.getTalents()
  }

  render() {
    return(
      <div className="VoxActHome">
      <Navbar />

        <table>
          <thead></thead>
          <tbody>
          <tr>
            <td>
        <Login
          history={this.props.history}
          loginUser={this.props.loginUser} 
          />
          </td>
          <td>
        <UserInput 
          history={this.props.history}
          addUser={this.props.addUser}
          loginUser={this.props.loginUser} 
          />

          </td>
          </tr>
          </tbody>
        </table>
        <br />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    error: <state className="loginerror"></state>
  }
}




export default connect(mapStateToProps, { addUser, loginUser, getUsers})(VoxAct)
