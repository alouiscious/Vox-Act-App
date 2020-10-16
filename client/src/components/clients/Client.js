import React from "react";

export const Client = ({client}) => (
  <div className="client-details">
    <h3>{client.client_name}</h3>
    <p>{client.hometown}</p>
    <br/>
    <p>{client.email}</p>
  </div>
)

