import React, { useEffect } from 'react'
import { connect } from "react-redux";

import { currentUser } from "../../actions/userActions";
// import { fetchTalent } from "../../actions/talentActions";

import User from '../../components/users/User';
import Talents from "../../components/talents/Talents"

const UserPage = ({
  match,
  dispatch, 
  user, 
  list, 
  hasErrors,
  loading, 
}) => {
    useEffect(() => {
      dispatch(currentUser())
    // dispatch(fetchTalent(id))
    // dispatch(fetchUsers())
    // dispatch(addUserPhoto())

  }, [dispatch, match])
   
  const renderUser = () => {
    if (loading.user) return <p>Loading User...</p>
    if (hasErrors.user) return <p>Unable to display User.</p>
    return <User key={user.id} user={user} /> 
  }

  const renderTalents = () => {
    if (loading.talents) return <p>Loading User...</p>
    if (hasErrors.talents) return <p>Unable to display User.</p>
    return <Talents key={user.upid} list={list} />
  }

  if (user){
  return (
    <section className="renderUser">
        <h2>Vox Act Client Profile</h2>
          {renderUser()}
          {user && renderTalents()}
    </section>
  )
  } else {
    return <p>loading</p>;
  }
}
      
const mapStateToProps = ({ userReducer, talentsReducer }) => ({ 
  user: userReducer.user,
  talent: talentsReducer.talent,
  loading: { 
    user: userReducer.loading, 
    talents: userReducer.loading 
  },

  hasErrors: { 
    user: userReducer.hasErrors, 
    talents: userReducer.hasErrors 
  },
})

export default connect(mapStateToProps)(UserPage)


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
//   deleteUser: id => dispatch({
//     type: 'DELETE_USER', 
//     id
//   }),
//   getTalents: id => dispatch({
//     type: 'GET_TALENT',
//     id
//   })
// })
  