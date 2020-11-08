import React from "react";
import { Link } from "react-router-dom";

export const User = ({ user, talent }) => (
  <div key={user.id} className={talent ? 'talent_style' : 'user'}>
    <h3>{user.user_name}, {user.hometown}</h3>
    {talent && (<Link to={`/users/${user.id}`} >
      Details for {user.user_name}</Link>
    )} <br />{talent ? user.email : user.upph}
  
    <p></p>
    {console.log('wa ha user from user', user)}
  </div>
)

export default User
