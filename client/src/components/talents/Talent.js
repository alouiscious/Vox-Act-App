import React from "react";

export const Talent = ({ talent }) => (
  <aside className="talent">
    <h2>{talent.talent_style}</h2>
    <h3>{talent.user_name}</h3>
    <p1>{talent.upid}</p1>
    <p1>{talent.title}</p1>
    <p1>{talent.description}</p1>
    <p1>{talent.aumf}</p1>
    <p1>{talent.phmf}</p1>
    <p1>{talent.vimf}</p1>
  </aside>
)

export default Talent