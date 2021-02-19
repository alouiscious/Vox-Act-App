import React from "react";
import { Link } from "react-router-dom";


  const Users = ({ user, talent }) => {
    return <div className={talent ? 'talent_style' : 'user'}>
      {console.table('wa ha user from users', user)}
        <h3>
          <Link to={`/UserPage/${user.id}`}className="button">
            {user.user_name} ~ {user.hometown}
            <br />
            <button type="text" >{`View This Profile`}</button>
          </Link>
        </h3>
          Email: {user.email}
          <br />
        {talent && talent ? user.email : user.upph}
    
    </div>  
  }

export default Users


