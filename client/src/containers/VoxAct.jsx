import React, { Component } from "react";
import Login from '../components/users/Login'
import UserInput from '../components/users/UserInput'
import { getUsers } from "../actions/usersActions";
// import { getTalents } from "../actions/talentActions";
import { addUser, loginUser } from "../actions/userActions";
import { connect } from "react-redux";

class VoxAct extends Component {

  componentDidUpdate() {
    // this.props.getUsers()
    // this.props.getTalents()
  }

  render() {
    return(
      <div className="VoxActHome">
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

// const mapDispatchToProps = dispatch => {
//   return {
//     addUser: user => dispatch({ type: 'ADD_CLIENT', user}),
//     loginUser: user => dispatch({type: 'LOGIN_USER', user})
//   }
// }


export default connect(mapStateToProps, { addUser, loginUser, getUsers})(VoxAct)
// export default connect(mapStateToProps, { addUser, loginUser, getUsers, getTalents })(VoxAct)