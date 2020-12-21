import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from '../actions/userActions'
import UserInput from '../components/users/UserInput'
import { addUsers, fetchUsers } from "../actions/usersActions";

class VoxActSignUp extends Component {
  render() {
    return (
      <div className="VoxActNew">
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td>
                <UserInput
                  history={this.props.history}
                  addUsers={this.props.addUsers}
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
  console.table('voxact state shape', state)
  return {
    error: <state className="loginerror"></state>
  }
}




export default connect(mapStateToProps, { addUsers, loginUser, fetchUsers})(VoxActSignUp)
