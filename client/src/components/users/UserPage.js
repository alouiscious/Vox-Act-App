
// import React, { useEffect } from 'react'
// import { connect } from "react-redux";
// import { fetchUser } from "../../actions/userActions";
// import { User } from "../users/User";
// import { getTalents } from "../../actions/talentActions";
// import Talent from "../talents/Talent"
// import TalentInput from '../talents/TalentInput';
// // import { addUserPhoto } from "../../actions/userActions";



// const UserPage = ({ match, dispatch, user, talents, hasErrors, loading }) => {
//   useEffect(() => {
//     console.table('wa ha userpage match', match.params)
//     const { id } = match.params
//     dispatch(fetchUser(id))
//     dispatch(getTalents(id))
//   }, [dispatch, match])
 
 
//   console.log('wa ha this from userpage', (user))
  
//   const renderUser = () => {
//     if (loading.user) return <p>Loading User...</p>
//     if (hasErrors.user) return <p>Unable to display User.</p>
//     return (
//       <div key={user.id}>
//         <User user={user} />
//       </div>
//     )
//   }

//   const renderTalents = () => {
//     if (loading.talents) return <p>Loading User...</p>
//     if (hasErrors.talents) return <p>Unable to display User.</p>
//     return talents.map(talent => (
//       <Talent key={talent.id} talent={talent}> 
//         {talent.talent_style}
//       </Talent>
//     ))
//   }

//   return (
//     <div className="renderUser">
//       <div>
//       </div>
//       {/* <Link to="/" component={VoxAct}>Login</Link> */}
//       {/* <Link to="/Users" component={Users}>Client List</Link> */}
//         <h2>User</h2>
//           {renderUser()}
//         <h3>Talents</h3>
//           {renderTalents()}
//         <br />
//         <br />
//         Add Talents here...
//         <TalentInput />
//     </div>
//   )
// }
      
// const mapStateToProps = state => ({ 
//   user: state.user,
//   talent: state.talents,
//   loading: { user: state.loading, talents: state.loading },
//   hasErrors: { user: state.hasErrors, talents: state.hasErrors },
// })

// // const mapDispatchToProps = dispatch => ({
// //   addUser: ({upid, user_name, hometown, email, password, upph}) => dispatch({
// //     type: 'ADD_USER', 
// //     upid, 
// //     user_name, 
// //     hometown, 
// //     email,
// //     password,
// //     upph
// //   }),
// //   deleteUser: id => dispatch({
// //     type: 'DELETE_USER', 
// //     id
// //   }),
// //   getTalents: id => dispatch({
// //     type: 'GET_TALENT',
// //     id
// //   })
// // })
  
// export default connect(mapStateToProps)(UserPage)