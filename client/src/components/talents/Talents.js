import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as talentActions from "../../actions/talentActions";
// import { fetchClient } from "../../actions/userActions";
import Talent from "./Talent";

const Talents = ({ list, dispatch, loading, hasErrors }) => {
  useEffect(() => {
    dispatch(talentActions.fetchTalents());
  }, [dispatch]);
  console.table("Talents List", list);
  // const user = fetchClient(upid)
  // dispatch(fetchClient(upid))

  const renderTalents = () => {
    if (loading) return <p>Loading Clients...</p>;
    if (hasErrors) return <p>No Clients to display.</p>;
    console.table("Talents List", list);
    return list.map(
      (talent) => <Talent talent={talent} />,
      <button type="text" value={talentActions.deleteTalent()}>
      Delete Talent
    </button>
    );
  };

  // const talents = talentActions.fetchTalent()

  return (
    <div className="renderTalents">
      <h1> Talents' List</h1>
      {renderTalents()}

    </div>
  );
};

const mapStateToProps = ({ talentsReducer }) => ({
  list: talentsReducer.list,
  loading: talentsReducer.loading,
  hasErrors: talentsReducer.hasErrors,
});

export default connect(mapStateToProps)(Talents);
