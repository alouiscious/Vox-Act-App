import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    <div className={"user"}>
      <h3>
        <Link to={`/UserEditPage`} className="button">
          {user.user_name} ~ {user.hometown}
          <br />
          <button type="text">Edit Your Talent Profile</button>
        </Link>
        <br />
        Email: {user.email}
      </h3>
      <img src={user.upph} alt={"profile"} />
      <br />
    </div>
  );
};

export default User;
