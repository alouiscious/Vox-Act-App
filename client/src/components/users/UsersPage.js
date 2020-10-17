import React from 'react'
// import Users from "./Users";
// import Talents from "../talents/Talents";
import {User} from "../users/User";
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';

// this.props.componentDidMount() (
//   this.props.getUsers(),
//   this.props.getTalents()
// )

const UserPage = ({loading, users, hasErrors}) => {
  console.log('wa ha this from user page', users)

  const renderUser = () => {
    if (loading) return <p>Laoding User...</p>
    if (hasErrors) return <p>Unable to display User.</p>
   
      return (
        users.map((user, id) => 
             <User key={user.id}
              user={user.userName /user.hometown}
              email={user.email}
              // deleteUser={deleteUser}
            /> 
        
        // user.talents.map((talent, id) => (
        //   <div>
        //     <li key={id}>{talent}</li>),
    
        //     <Link to="/talents" className="button">
        //       view talents
        //     </Link>
        //     <Link to="/talentInput"
        //       addTalent={this.props.addTalent}>
        //         add talent
        //     </Link>
        //     <button onClick={this.handleOnClick}> Remove Talent</button>
        //     <Users
        //       users={users}
        //     />
        //   </div>
        // ))
      )
    )
  }
    
    return (
      <div>
        {renderUser}
      </div>
    )
}

   
const mapStateToProps = state => ({ 
  loading: state.posts.loading,
  users: state.users,
  hasErrors: state.users.hasErrors,
  numberOfUsers: state.users.length
})

const mapDispatchToProps = dispatch => ({
  addUser: ({id, userName, hometown, email, password}) => dispatch({
    type: 'ADD_CLIENT', 
    id, 
    userName, 
    hometown, 
    email,
    password
  }),
  deleteUser: id => dispatch({
    type: 'DELETE_CLIENT', 
    id
  })
})

// export default UserPage

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)