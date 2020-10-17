import React from "react";

export const User = ({user}) => (
  <div className="user-details">
    <h3>{user.user_name}</h3>
    <p>{user.hometown}</p>
    <br/>
    <p>{user.email}</p>
  </div>
)

