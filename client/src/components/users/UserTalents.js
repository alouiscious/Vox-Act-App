import React, { useEffect } from "react";
import { connect } from "react-redux";

// import { currentUser } from "../../actions/userActions"
import * as talentActions from "../../actions/talentActions";
import Talent from "../talents/Talent";

const UserTalents = ({ 
  match, history, dispatch, list, hasErrors, loading 
}) => {
  useEffect(() => {
    // dispatch(currentUser());
    dispatch(talentActions.fetchTalents());
  }, [dispatch, match]);

  const renderTalent = () => {
    if (loading) return <p>Loading Talents...</p>;
    if (hasErrors) return <p>No Talents to display.</p>;
    return list.map((talent) => (
      <Talent 
        key={talent.id} 
        talent={talent}  
        history={talent.history} 
        // deleteTalent={talentActions.deleteTalent()}
        // deleteTalent={this.props.deleteTalent}
        />
      
      ));
    };
    
    // const talents = talentActions.fetchTalent()
    
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
