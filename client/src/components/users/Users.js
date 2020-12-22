import React, {useEffect} from "react"
import { connect } from 'react-redux'
import  {fetchUsers}  from '../../actions/usersActions';
import User from "./User"

const Users = ({list, dispatch, loading, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])
    console.table('Users List', list)
    
  const renderUsers = () => {
    if (loading) return <p>Loading Clients...</p>
    if (hasErrors) return <p>No Clients to display.</p>
    console.table('Users List', list)
    return list.map((user) => <
      User key={user.id} user={user}
    />)
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
const mapStateToProps = ({usersReducer, userReducer}) => ({
  user: userReducer.user,
  list: usersReducer.list,
  loading: usersReducer.loading,
  hasErrors: usersReducer.hasErrors
})      

// Connect Redux to React
export default connect(mapStateToProps)(Users)
