import React from "react";
import { Link } from "react-router-dom";


  const User = ({ user, talent }) => {
    return <div className={talent ? 'talent_style' : 'user'}>
      {console.table('wa ha user from user', user)}
        <h3>
          <Link to={`/UserEdit/${user.id}`}className="button">
            {user.user_name} ~ {user.hometown}
          </Link>
        </h3>
          Email: {user.email}
          <br />
        {talent && talent ? user.email : user.upph}
    </div>  
  }

export default User


