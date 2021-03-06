import React from "react";
import {connect} from "react-redux";

import { currentUser } from "../../actions/userActions"
import { Link } from "react-router-dom";

const UserEdit = ({ user, currentUser }) => {
    console.log('current user', currentUser())    
  return <div className={"userEdit"}>
      <h3>
        {(user.upid === currentUser().upid)} 
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

export default connect(null, {currentUser})(UserEdit);
