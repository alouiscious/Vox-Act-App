import React from "react";

const Talent = ({ talent }) => {
  return (
    <aside className="talent">
      {console.table("talent from Talent", talent)}
      <h4>{talent.title} - {talent.talentStyle}</h4>
      <p>{talent.description}</p>
      <br />
      
      <p>{talent.aumf}</p>
      <p>{talent.phmf}</p>
      <p>{talent.vimf}</p>
    </aside>
  );
};

export default Talent;
