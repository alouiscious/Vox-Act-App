import React, { useEffect } from "react";
import { connect } from "react-redux";

import { currentUser } from "../../actions/userActions";

import UserEdit from "../../components/users/UserEdit";
import UserTalents from "../../components/users/UserTalents"
import TalentInput from "../../components/talents/TalentInput";

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
    dispatch(currentUser());
  }, [dispatch, match]);

  const renderUser = () => {
    if (loading.user) return <p>Loading User...</p>;
    if (hasErrors.user) return <p>Unable to display User.</p>;
    return (
      <div>
        <UserEdit key={user.id} user={user} />
      </div>
    );
  };

  const renderTalents = () => {
    if (loading.talents || !user) return <p>Loading User...</p>;
    if (hasErrors.talents) return <p>Unable to display User.</p>;
    return <UserTalents key={user.id} list={list} />;
  };

  if (user) {
    return (
      <section className="renderEditUser">
        <h2>Vox Act Profile Creation Page...</h2>
        {renderUser()}
        <div>
          <br />
          <h3>Add New Talents here {user.user_name}</h3>
          <TalentInput history={history} />
          <div></div>
          {user && renderTalents()}
          <br />
        </div>
      </section>
    );
  } else {
    return <p>loading</p>;
  }
};

const mapStateToProps = ({ userReducer, talentsReducer }) => ({
  user: userReducer.user,
  talent: talentsReducer.talent,

  loading: {
    user: userReducer.loading,
    talent: userReducer.loading,
  },

  hasErrors: {
    user: userReducer.hasErrors,
    talent: userReducer.hasErrors,
  },
});

export default connect(mapStateToProps)(UserEditPage);

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
