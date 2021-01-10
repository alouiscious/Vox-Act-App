import React, { useEffect } from 'react'
import { connect } from "react-redux";

// import  {loginUser }  from '../../actions/userActions';
import { fetchClient } from "../../actions/userActions";
import { fetchTalent } from "../../actions/talentActions";

import User from "./User";
import Talents from "../talents/Talents"

const UserPage = ({
  match, 
  dispatch, 
  user, 
  talents, 
  hasErrors,
  loading, 
}) => {
    useEffect(() => {
    const { id } = match.params
    dispatch(fetchClient(id))
    dispatch(fetchTalent(id))
    // dispatch(fetchUsers())
    // dispatch(addUserPhoto())

  }, [dispatch, match])
   
  const renderUser = () => {
    console.table('wa ha user from userpage', (user))
    if (loading.user) return <p>Loading User...</p>
    if (hasErrors.user) return <p>Unable to display User.</p>
    return <User key={user.id} user={user} />

  }

  const renderTalents = () => {
    if (loading.talents) return <p>Loading User...</p>
    if (hasErrors.talents) return <p>Unable to display User.</p>
    
    return talents && talents.map((talent) => 
    <Talents key={talent.id} talent={talent} />
    )
  }

  return (
    <section className="renderUser">
        <h2>Vox Act Client Talent Details...</h2>
          {renderUser()}
        <h3>Talents</h3>
          {renderTalents()}

    </section>
  )
}
      
const mapStateToProps = ({ userReducer }) => ({ 
  user: userReducer.user,
  talents: userReducer.talents,
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
  