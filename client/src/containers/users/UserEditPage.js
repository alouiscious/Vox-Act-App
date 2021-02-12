import React, { useEffect } from "react";
import { connect } from "react-redux";

import { currentUser, addNewPhoto } from "../../actions/userActions";
// import { fetchTalent } from "../../actions/talentActions";

import UserEdit from "../../components/users/UserEdit";
// import UserAddMedia from '../../components/users/UserAddMedia';
import Talents from "../../components/talents/Talents";
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
    // dispatch(addNewPhoto(upph));
  }, [dispatch, match]);

  // console.table("user.id from userEditPage", list);
  // console.table("user from userEditPage", this.props);
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
    return <Talents key={user.id} list={list} />;
  };

  if (user) {
    return (
      <section className="renderEditUser">
        <h2>Vox Act Client Talent Details...</h2>
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
  // upph: userReducer.upph,
  talent: talentsReducer.talent,

  loading: {
    user: userReducer.loading,
    // upph: userReducer.loading,
    talent: userReducer.loading,
  },

  hasErrors: {
    user: userReducer.hasErrors,
    // upph: userReducer.hasErrors,
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
