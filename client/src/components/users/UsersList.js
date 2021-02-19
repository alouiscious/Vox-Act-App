import React, { useEffect } from "react";
import { connect } from "react-redux";
// import { currentUser } from "../../actions/userActions";
import { fetchUsers } from "../../actions/usersActions";
import Users from "./Users";

const UsersList = ({ list, dispatch, loading, hasErrors }) => {
  useEffect(() => {
    // dispatch(currentUser());
    dispatch(fetchUsers());
  }, [dispatch]);
  console.table("Users List", list);

  const renderUsersList = () => {
    const usersCount = list.length;
    // if (list) return <p>{usersCount} Vox Act Users!</p>
    if (loading) return <p>Loading Clients...</p>;
    if (hasErrors) return <p>No Clients to display.</p>;
    console.table("Users List in renderUsersList", list);
    if (list) {
      return (
        <div>
          <p>{usersCount} Vox Act Users!</p>
          {list.map((user) => <Users key={user.id} user={user} />)}
        </div>
      );
    }
  };

  return (
    <div className="renderUsers">
      <div>
        <br />
        <h1>Vox Act - Client List</h1>
        {renderUsersList()}
      </div>
    </div>
  );
};

// Map Redux state to React component props
const mapStateToProps = ({ usersReducer, userReducer }) => ({
  user: userReducer.user,
  list: usersReducer.list,
  loading: usersReducer.loading,
  hasErrors: usersReducer.hasErrors,
  // return {
  //   numberOfUsers: state.users.length
  // }
});

// Connect Redux to React
export default connect(mapStateToProps)(UsersList);
