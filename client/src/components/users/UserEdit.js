import React from "react";
import { Link } from "react-router-dom";




const UserEdit = ({ user, talent }) => {
  return <div className={talent ? "new_user" : "user"}>
      {console.table("user from userEdit(13)", user)}
      <h3>
        <Link to={`/UserPage/`} className="button">
          {user.user_name} ~ {user.hometown}   
          <button type="text">Edit Your Talent Profile</button>
        </Link>
      </h3>
      Email: {user.email}
      <br />
      {talent && talent ? user.upph : (alert("Please complete your VoxAct..."))}
      <br />
    </div>
  ;
};

export default UserEdit;
