import React from "react";
import { Link } from "react-router-dom";


const Talents = ({ talent }) => {
  return (
    <div className={talent ? "talent_style" : "user"}>
      {console.table("talents list from talents")}
      <b>
        <Link to={`/UserPage/${talent.user_id}`} className="talents">
          {talent.title} | {talent.talent_style}
        </Link>
      </b>
      <br />
      <br />
    </div>
  );
};
export default Talents;
