import React, { useEffect } from "react";
import { connect } from 'react-redux';
import  {getUsers} from '../../actions/userActions';
// import  {getTalents}  from "../../actions/talentActions";
// import User from "../users/User";

const Users = ({dispatch, loading, users, hasErrors, numberOfUsers }) => {
  useEffect(() => {
    dispatch(getUsers())
    // dispatch(getUsers(), getTalents())
  },[dispatch])
  
  const countUsers = numberOfUsers
  
  const renderUser = () => {
    if (loading) return <p>Laoding User...</p>
    if (hasErrors) return <p>Unable to display User.</p>
    return users.map((user) => 
        <li key={user.id} 
          user={user.userName /user.hometown}
          email={user.email}
        />
    )
  }
          // deleteUser={deleteUser}
        
      
      

      // user.talents.map((talent, id) => {
      //   <div>
      //     <li key={id}>{talent}</li>),
  
      //     <Link to="/talents" className="button">
      //       view talents
      //     </Link>
      //     <Link to="/talentInput"
      //       addTalent={this.props.addTalent}>
      //         add talent
      //     </Link>
      //     <button onClick={this.handleOnClick}> Remove Talent</button>
      //     <Users
      //       users={users}
      //     />
      //   </div>
      // })
    
     
      return (
        <div>
          <h1>User List</h1>
          {renderUser()}
          <p>{countUsers}</p>
        </div>
      )   

      }


// Map Redux state to React component props
const mapStateToProps = (state) => ({
  loading: state.users.loading,
  users: state.users.users,
  hasErrors: state.users.hasErrors,
  numberOfUsers: state.users.count,

})      
// Connect Redux to React
export default connect(mapStateToProps)(Users)
