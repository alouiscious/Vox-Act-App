import React, { useEffect } from 'react'
import { getUsers } from "../../actions/usersActions";
import Users from "./Users";
// import { getTalents } from "../../actions/talentActions";
// import Talents from "./Talents"
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';



const UserPage = ({
  dispatch, 
  // dispatchTalent,
  loading, 
  users, 
  // talents, 
  hasErrors
}) => {
  useEffect(() => {
    dispatch(getUsers()) 
  }, [dispatch])
  // useEffect(() => {
  //   dispatch(getTalents())
  // }, dispatch)
 
  const renderUser = () => {
    console.log('wa ha this from user page', users)
    if (loading) return <p>Loading User...</p>
    if (hasErrors) return <p>Unable to display User.</p>

    return () =>{ 
      users.map((user) => <Users key={user.upid} user={user.userName} hometown={user.hometown} email={user.email} />)
        // talents.map((talent) => <Talents key={talent.user.upid} />)
    }
  }

  return (
    <div className="renderUser">
      <h1>User</h1>
      {renderUser()}
    </div>
  )
}
      
const mapStateToProps = (state) => ({ 
  loading: state.users.loading,
  users: state.users,
  hasErrors: state.users.hasErrors,
  numberOfUsers: state.users.length
})
    

            /*         
        
         
          <Link to="/talents" className="button">
            view talents
          </Link>
          <Link to="/talentInput"
            addTalent={this.props.addTalent}>
              add talent
          </Link>
            <button onClick={this.handleOnClick}> Remove Talent</button>
            
            </div>
            
            )
          })}
        */ 
  
    

   


// const mapDispatchToProps = dispatch => ({
//   addUser: ({upid, user_name, hometown, email, password, upph}) => dispatch({
//     type: 'ADD_USER', 
//     upid, 
//     user_name, 
//     hometown, 
//     email,
//     password,
//     upph
//   }),
//   deleteUser: upid => dispatch({
//     type: 'DELETE_USER', 
//     upid
//   }),
//   getTalents: upid => dispatch({
//     type: 'GET_TALENT',
//     upid
//   })
// })
  
export default connect(mapStateToProps)(UserPage)