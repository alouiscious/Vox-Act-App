import React from "react";
import { Link } from "react-router-dom";

  const User = ({ user, talent }) => (
    <div className={talent ? 'talent_style' : 'user'}>
    {console.log('wa ha user from user', user)}
       <h3>{user.user_name} {user.hometown}</h3>
      {talent && talent ? user.email : user.upph}
        (
          <Link to={`/users/${user.id}`}className="button">
            View Client:
          </Link>
        )
      </div>
)

export default User


