import React, { useEffect } from 'react'
import { fetchUser } from "../../actions/userActions";
import { connect } from "react-redux";
import User from "../users/User";

import { getTalents } from "../../actions/talentActions";
import Talent from "../talents/Talent"
// import { Link } from 'react-router-dom';



const UserPage = ({dispatch, loading, users, talents, hasErrors}) => {
  useEffect(() => {
    dispatch(fetchUser())
    dispatch(getTalents())
  }, [dispatch])
 
 
  console.log('wa ha this from userpage', ({users}))
  
  const renderUser = () => {
    if (loading) return <p>Loading User...</p>
    if (hasErrors) return <p>Unable to display User.</p>

    return (
      users.map((user) => {
        talents.map((talent) => 
          <div>
            <User key={user.id}>
              {user.user_name} {user.hometown} {user.email} {user.upph}
            </User>
            <Talent key={talent.user.upid}> 
              {talent.talent_style}
            </Talent>
          </div>
        )
      })
    ) 
  }

  return (
    <div className="renderUser">
      <h1>User</h1>
      <div>{renderUser()}</div>
    </div>
  )
}
      
const mapStateToProps = (state) => ({ 
  loading: state.user.loading,
  user: state.user,
  hasErrors: state.user.hasErrors,
  numberOfUsers: state.user.length
  
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