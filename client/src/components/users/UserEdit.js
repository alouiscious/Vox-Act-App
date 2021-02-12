import React from "react";
import { Link } from "react-router-dom";

const UserEdit = ({ user }) => {
  return <div className={"userEdit"}>
      <h3>
        <Link to={`/UserPage/${user.id}`} className="button">
          {user.user_name} ~ {user.hometown}   
          <br />
          <button type="text">View Your Profile</button>
        </Link>
      </h3>
      Email: {user.email}
      <br />
      <img src={user.upph} alt={"profile"}/>
      <br />

    </div>
  ;
};

export default UserEdit;
