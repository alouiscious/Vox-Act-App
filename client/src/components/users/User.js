import React from "react";
import { Link } from "react-router-dom";


  const User = ({ user, talent }) => {
    return <div className={talent ? 'talent_style' : 'user'}>
      {console.table('user from user', user)}
        <h3>
          <Link to={`/UserPage/${user.id}`}className="button">
            {user.user_name} ~ {user.hometown}  
            <button type="text" >{`View Your Talent Profile`}</button>
          </Link>
        </h3>
          Email: {user.email}
          <br />
        {talent && talent ? user.email : user.upph}
    </div>  
  }

export default User


