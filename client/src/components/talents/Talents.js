import React  from "react";
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
      {talent.aumf}
      {talent.phmf}
      {talent.vimf}
        <br />
        {/* <button type="button" onClick={this.props.deleteTalent} >Delete Talent </button> */}
        {/* <button type="button" onClick={deleteTalent(talent.id)} >Delete Talent </button> */}
        <br />
    </div>
  );
};



export default Talents;
