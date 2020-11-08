import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { fetchUser } from "../../actions/userActions";
import { User } from "../users/User";
// import { addUserPhoto } from "../../actions/userActions";

import { getTalents } from "../../actions/talentActions";
import Talent from "../talents/Talent"
import TalentInput from '../talents/TalentInput';
// import { Link } from 'react-router-dom';



const UserPage = ({match, dispatch, loading, user, talents, hasErrors}) => {
  useEffect(() => {
    const { id } = match.params
    dispatch(fetchUser(id))
    dispatch(getTalents(id))
  }, [dispatch, match])
 
 
  console.log('wa ha this from userpage', ({user}))
  
  const renderUser = () => {
    if (loading.user) return <p>Loading User...</p>
    if (hasErrors.user) return <p>Unable to display User.</p>
    return <User user={user} />
  }

  const renderTalents = () => {
    if (loading.user) return <p>Loading User...</p>
    if (hasErrors.user) return <p>Unable to display User.</p>
    return talents.map(talent => (
      <Talent key={talent.id} talent={talent}> 
        {talent.talent_style}
      </Talent>
    ))
  }

  return (
    <div className="renderUser">
      <h2>User</h2>
      {renderUser()}
      <h3>Talents</h3>
      {renderTalents()}
      <br />
      <br />
      Add Talents here...
        <TalentInput />
    </div>
  )
}
      
const mapStateToProps = state => ({ 
  user: state.user.user,
  talents: state.talents.talents,
  loading: state.user.loading,
  hasErrors: state.user.hasErrors,
  numberOfUsers: state.user.length
  
})

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