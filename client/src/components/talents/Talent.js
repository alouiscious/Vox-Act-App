import React from "react";
import { Link } from "react-router-dom"



const Talent = ({ talent }) => {
    console.table("Talent delete id", talent.id);
  

      return (
        <aside className="talent">
        {console.table("talent from Talent", talent)}
          <b>
            <Link to={`/TalentShow/${talent.id}` } >
                {console.table(talent.upid)}
              {talent.title} - {talent.talent_style}
            </Link>
          </b>
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
     )

     
  
}


export default Talent;


