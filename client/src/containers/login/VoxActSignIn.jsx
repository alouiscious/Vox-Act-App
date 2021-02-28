import React, { Component } from "react";
import { connect } from "react-redux";
import Login from '../../components/users/Login'
import { loginUser } from '../../actions/userActions'
import { addUser, fetchUsers } from "../../actions/usersActions";

class VoxActSignUp extends Component {

  render() {
    return (
      <div className="VoxActSignIn">
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td>
                <Login
                  loginUser={this.props.loginUser}
                  history={this.props.history}
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




export default connect(mapStateToProps, { addUser, loginUser, fetchUsers })(VoxActSignUp)
