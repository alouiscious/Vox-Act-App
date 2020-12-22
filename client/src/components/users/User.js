import React from "react";
import { Link } from "react-router-dom";


  const User = ({ user, talent }) => {
    return <div className={talent ? 'talent_style' : 'user'}>
      {console.table('wa ha user from user', user)}
        <h3>{user.user_name} {user.hometown}</h3>
          
            <Link to={`/UserPage/${user.id}`}className="button">
              View Client: {user.user_name}
            </Link>
          
        {talent && talent ? user.email : user.upph}
    </div>  
  }

export default User


