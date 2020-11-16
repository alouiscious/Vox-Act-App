import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/usersActions';
// import User from "./User";

const Users = ({dispatch, loading, users, hasErrors }) => {
  (console.table('users renderUser', users))
  useEffect(() => {
    dispatch(fetchUsers())
  },[dispatch])

  
  const renderUsers = () => {
    if (loading) return <p>Loading Clients...</p>
    if (hasErrors) return <p>No Clients to display.</p>
    // users.map((user) => {
    //   return (
    //     <div key={user.id}>
    //       <User user={user}/>
    //     </div> 
    //   )
    // })
  }

  return (
    <div className="renderUsers">
      <div>
        <br />
        <h1>Vox Act - Client List</h1>
        {renderUsers()}
      </div>
    </div>
  )   
}

// Map Redux state to React component props
const mapStateToProps = state => ({
  users: state.users,
  loading: state.loading,
  hasErrors: state.hasErrors
})      

// Connect Redux to React
export default connect(mapStateToProps)(Users)
  
        
      
      

