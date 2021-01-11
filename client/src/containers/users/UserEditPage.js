import React, { useEffect } from 'react'
import { connect } from "react-redux";

// import  {loginUser }  from '../../actions/userActions';
import { fetchClient } from "../../actions/userActions";
import { fetchTalents, addNewTalent } from "../../actions/talentActions";

import UserEdit from "../../components/users/User";
import Talents from "../../components/talents/Talents"
import TalentInput from '../../components/talents/TalentInput';

const UserEditPage = ({
  match, 
  history,
  dispatch, 
  user, 
  list, 
  hasErrors,
  loading, 
}) => {
    useEffect(() => {
    const { id } = match.params
    dispatch(fetchClient(id))
    dispatch(fetchTalents())
    // dispatch(addUserPhoto())

  }, [dispatch, match])
   
  const renderUser = () => {
    console.table('wa ha user from userEditPage', (user))
    if (loading.user) return <p>Loading User...</p>
    if (hasErrors.user) return <p>Unable to display User.</p>
    return  <UserEdit key={user.id} user={user} />

  }



  const renderTalents = () => {
    if (loading.talents) return <p>Loading User...</p>
    if (hasErrors.talents) return <p>Unable to display User.</p>
      return <Talents key={user.upid} list={list} />
    

  }

  return (
    <section className="renderUser">
        <h2>Vox Act Client Talent Details...</h2>
          {renderUser()}
         
        <h3>Talents</h3>
          {renderTalents()}
        <br />
        <br />
        Add New Talents here...
        <TalentInput history={history}/>
    </section>
  )
}
      
const mapStateToProps = ({ userReducer, talentsReducer }) => ({ 
  user: userReducer.user,
  talent: talentsReducer.talent,
  // talents: talentsReducer.talents,
  loading: { 
    user: userReducer.loading, 
    talent: userReducer.loading 
  },

  hasErrors: { 
    user: userReducer.hasErrors, 
    talent: userReducer.hasErrors 
  },
})

export default connect(mapStateToProps)(UserEditPage)


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
  