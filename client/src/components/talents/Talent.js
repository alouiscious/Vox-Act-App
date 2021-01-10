import React from "react";

const Talent = ({ talent, user }) => {
  return (
    <aside className="talent">
      {console.table("wa ha user from talent", user)}

      <h2>{talent.talent_style}</h2>
      <h3>{talent.user_name}</h3>
      <p1>{talent.upid}</p1>
      <p1>{talent.title}</p1>
      <p1>{talent.description}</p1>
      <p1>{talent.aumf}</p1>
      <p1>{talent.phmf}</p1>
      <p1>{talent.vimf}</p1>

      <p>Talent(s):</p>
      <ul>
        {user.talents.map((talent, upid) => (
          <li key={upid}>
            {talent}
       
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Talent;
