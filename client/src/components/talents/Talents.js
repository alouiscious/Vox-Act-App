import React, { useEffect } from "react";
import { connect } from 'react-redux'
import * as talentActions from "../../actions/talentActions";
import { fetchClient } from "../../actions/userActions";
import Talent from "./Talent"

const Talents = ({ list, dispatch, loading, hasErrors }) => {
  useEffect(() => {
    dispatch(talentActions.fetchTalents())
  }, [dispatch])
  console.table('Users List', list)
  // const user = fetchClient(upid)
  // dispatch(fetchClient(upid))

  const renderTalents = () => {
    if (loading) return <p>Loading Clients...</p>
    if (hasErrors) return <p>No Clients to display.</p>
    console.table('Talents List', list)
    return list.map((talent) => <Talent key={talent.upid} talent={talent}/>)
  }
  
  const talents = talentActions.fetchTalent()
  const deleteTalent = talentActions.deleteTalent()
  
  console.table('Wa Ha Talents', talents)
  return (
    <div className="renderTalents">
      <h1> Talents' List</h1>
    {/* {users.map((user, upid) => 
    <div> key={upid} 
      <h4> User: {user.user_name}, {user.hometown}</h4>
      {renderTalents()}
      <button type="text" value={deleteTalent}>
              Delete Talent
            </button>
    </div>
    )} */}
  </div>
)
}

const mapStateToProps = ({ talentsReducer }) => ({
  list: talentsReducer.list,
  loading: talentsReducer.loading,
  hasErrors: talentsReducer.hasErrors
})

export default connect(mapStateToProps)(Talents)