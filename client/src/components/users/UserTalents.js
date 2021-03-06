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

  const renderTalent = () => {

    if (loading) return <p>Loading Talents...</p>;
    if (hasErrors) return <p>No Talents to display.</p>;
    return list.map((talent, index) => (
      <Talent
        key={talent.id}
        talent={talent}
        history={talent.history}
        // deleteTalent={talentActions.deleteTalent()}
        // deleteTalent={this.props.deleteTalent}
        // renderVoteCount={this.props.renderVoteCount}
        // renderVoteCount={this.props.renderVoteCount}
        />
    ))
  }

  const renderVoteCount = () => {
    if (loading) return <p>Loading Talents...</p>;
    if (hasErrors) return <p>No Talents to display.</p>;
    return <Counter />
  };

  return (
    <div className="renderTalents">
      <h1> Talents' List</h1>
      {renderTalent()}
      {renderVoteCount()}
    </div>
  );
};

const mapStateToProps = ({ talentsReducer }) => ({
  list: talentsReducer.list,
  loading: talentsReducer.loading,
  hasErrors: talentsReducer.hasErrors,
});

export default connect(mapStateToProps)(UserTalents);
