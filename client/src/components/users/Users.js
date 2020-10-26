import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import  { fetchUsers } from '../../actions/usersActions';
import { connect } from 'react-redux';
// import  {getTalents}  from "../../actions/talentActions";

const Users = ({dispatch, loading, users, hasErrors, numberOfUsers }) => {
  useEffect(() => {
    dispatch(fetchUsers())
  },[dispatch])
  
  
  const renderUser = () => {
    if (loading) return <p>Loading User...</p>
    if (hasErrors) return <p>Unable to display User.</p>
    return (
      users.map((user) => 
        <div key={user.id}>

          <li> 
            <Link to="/user/:upid" className="userLink">
            {user.user_name}, </Link> {user.hometown}
            <br />
            {user.email}
          </li>
          <br />
        </div> 
      )
    )
  }
        
      
      

      // user.talents.map((talent, id) => {
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
      // })
    
     
      return (
        <div>
          <h1>Users List</h1>
          {renderUser()}
        </div>
      )   

      }


// Map Redux state to React component props
const mapStateToProps = (state) => ({
  loading: state.users.loading,
  users: state.users.users,
  hasErrors: state.users.hasErrors,
  numberOfUsers: state.users.count,

})      
// Connect Redux to React
export default connect(mapStateToProps)(Users)
