import React from "react";
import { Link } from "react-router-dom"
// import { connect } from "react-redux"
// import { deleteTalent } from "../../actions/talentActions"

const Talent = ({ talent }) => {
  console.table("Talent delete id", talent.id);

  return (
    <aside className="talent">
      {console.table("talent from Talent", talent)}
      <Link to={`/UserPage/${talent.user_id}`} >
           {console.table(talent.upid)}
      <b>{talent.title} - {talent.talent_style}</b>
      </Link>
      <br />
      {talent.description}
      <br />
     {talent.aumf}
     {talent.phmf}
     {talent.vimf}
      <br />
      {/* <button type="button" onClick={this.props.deleteTalent} >Delete Talent </button> */}
      {/* // <button type="button" onClick={deleteTalent(talent.id)} >Delete Talent </button> */}

      <br />
      <br />
    </aside>
  );
};

export default Talent;
// export default connect(null, { deleteTalent })(Talent);
