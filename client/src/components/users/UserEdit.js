import React from "react";
import { Link } from "react-router-dom";
import UserAddDetails from "./User";

const renderAddUserPhoto = (user) => {
  return <UserAddDetails key={user.id} user={user} />;
};

const UserEdit = ({ user, talent }) => {
  return (
    <div className={talent ? "new_user" : "user"}>
      {console.table("wa ha user from userEdit", user)}
      <h3>
        {/* <Link to={`/UserEditPage/${user.id}`} className="button"> */}
        <Link to={`/UserEditPage/`} className="button">
          {user.user_name} ~ {user.hometown}
        </Link>
      </h3>
      Email: {user.email}
      <br />
      {talent && talent ? user.upph : (alert("Please complete your VoxAct..."))}
      {renderAddUserPhoto()}
      <br />
    </div>
  );
};

export default UserEdit;
