import React, { useEffect } from "react";
import Navbar from "../Navbar";
import { User } from "../users/User";
import  { fetchUsers } from '../../actions/usersActions';
import { connect } from 'react-redux';

const Users = ({dispatch, loading, users, hasErrors, numberOfUsers }) => {
  useEffect(() => {
    dispatch(fetchUsers())
  },[dispatch])
  
  
  const renderUsers = () => {
    if (loading) return <p>Loading User...</p>
    if (hasErrors) return <p>Unable to display User.</p>
    return (
      users.map((user => 
        <div key={user.id}>
            <User  className="userLink" user={user} talent /> 
        </div> 
      ))
    )
  }   
    
  return (
    <div>
      <Navbar />
      <br />
      <h1>Vox Act - Client List</h1>
      Get connected to more than {numberOfUsers} clients
      {renderUsers()}
    </div>
  )   
      
}

// Map Redux state to React component props
const mapStateToProps = state => ({
  loading: state.users.loading,
  users: state.users.users,
  hasErrors: state.users.hasErrors,
  numberOfUsers: state.users.count,

})      
// Connect Redux to React

export default connect(mapStateToProps)(Users)
  
        
      
      

