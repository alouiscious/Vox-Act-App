import React, { useEffect } from 'react'
import { connect } from "react-redux";

import { fetchClient } from "../../actions/userActions";
import { fetchTalent } from "../../actions/talentActions";

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
    const { id } = match.params;
    dispatch(fetchClient(id));
    dispatch(fetchTalent(id));
    // dispatch(addUserPhoto())
    console.table("id from useEffect", id);
  }, [dispatch, match]);

  console.table("user.id from userEditPage", user.id);
  console.table("user from userEditPage", user);
  const renderUser = () => {
    if (loading.user) return <p>Loading User...</p>;
    if (hasErrors.user) return <p>Unable to display User.</p>;
    return <UserEdit key={user.id} user={user} />;
  };

  const renderTalents = () => {
    if (loading.talents) return <p>Loading User...</p>;
    if (hasErrors.talents) return <p>Unable to display User.</p>;
    return <Talents key={user.id} list={list} />;
  };

  return (
    <section className="renderUser">
      <h2>Vox Act Client Talent Details...</h2>
      {renderUser()}
      <div>
        {renderTalents()}
        <br />
        <br />
        <div></div>
        <h3>Add New Talents here...</h3>
        <TalentInput history={history} />
      </div>
    </section>
  );
};
      
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
  