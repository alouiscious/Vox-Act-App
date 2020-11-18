import React, { useEffect } from "react"
import { connect } from 'react-redux'
import  { fetchUsers }  from '../../actions/usersActions';
// import User from "./User";

const Users = ({users, dispatch, loading, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])
    console.table(users)
  const renderUsers = () => {
    if (loading) return <p>Loading Clients...</p>
    if (hasErrors) return <p>No Clients to display.</p>
    // return users.map(user => <User key={user.id} user={user} /> )
    
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
  loading: state.loading,
  users: state.users,
  hasErrors: state.hasErrors
})      

// Connect Redux to React
export default connect(mapStateToProps)(Users)
  
        
      
      

