import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    <div className={"user"}>
      <h3>
        <Link to={`/UserEditPage/${user.id}`} className="button">
          {user.user_name} ~ {user.hometown}
          <br />
          <button type="text">Edit Your Talent Profile</button>
        </Link>
      </h3>
      Email: {user.email}
      <br />
      <img src={user.upph} alt={"profile"} />
    </div>
  );
};

export default User;
