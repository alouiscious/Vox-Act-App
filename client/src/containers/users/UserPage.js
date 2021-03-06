import React, { useEffect } from 'react'
import { connect } from "react-redux";

import { currentUser } from "../../actions/userActions";

import User from '../../components/users/User';
import UserTalents from "../../components/users/UserTalents"

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
    return <UserTalents key={user.upid} list={list} />
  }

  if (user){
  return (
    <section className="renderUser">
      <h2>Vox Act Client Profile</h2>
      {renderUser()}
      {user && renderTalents()}
    </section>
  );
  } else {
    return <p>Loading...</p>;
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



  