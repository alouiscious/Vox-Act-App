import React, { useEffect } from "react";
import { connect } from "react-redux";

import * as talentActions from "../../actions/talentActions";

import Counter from "../../components/Counter";
import Talent from "../talents/Talent";


const UserTalents = ({
  match,
  history,
  dispatch,
  list,
  hasErrors,
  loading,
}) => {
  useEffect(() => {
    dispatch(talentActions.fetchTalents());
  }, [dispatch, match]);

  // const { votes, voted, talentId, talentUserId, setTalentId, setTalentUserId  } = this.state;
  // function castVote(id, status, talent) {
  //   this.setState({
  //     votes: votes.filter(vote => !(vote === id)),
  //     voted: status === 'voted' ? count : voted,
  //     talentId: Number(talent.id),
  //   })
  // }

  const renderTalent = () => {

    if (loading) return <p>Loading Talents...</p>;
    if (hasErrors) return <p>No Talents to display.</p>;


    return list.map((talent, index) => (

    
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td>
              <Talent
                key={talent.id}
                talent={talent}
                history={talent.history}
              />
            </td>
            <td>
              <Counter
                key={index}
                id={`${talent.user_id}_${talent.id}`}
              />
            </td>
          </tr>
        </tbody>
      </table>
       )
    )
  }

  // const renderVoteCount = () => {
  //   if (loading) return <p>Loading Talents...</p>;
  //   if (hasErrors) return <p>No Talents to display.</p>;
    
  //   return <Counter />
  // };

  return (
    <div className="renderTalents">
      <h1> Talents' List</h1>
      {renderTalent()}
    </div>
  );
};

const mapStateToProps = ({ talentsReducer }) => ({
  list: talentsReducer.list,
  loading: talentsReducer.loading,
  hasErrors: talentsReducer.hasErrors,
});

export default connect(mapStateToProps)(UserTalents);
