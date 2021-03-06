// import React, { useEffect } from 'react'
// import { connect } from "react-redux";

// import { currentUser } from "../../actions/userActions";

// import Talent from '../../components/talents/Talent';
// import Talents from "../../components/talents/Talents"

// const TalentPage = ({
//   match,
//   dispatch, 
//   user, 
//   list, 
//   hasErrors,
//   loading, 
// }) => {
//     useEffect(() => {
//       dispatch(currentUser())
//     // dispatch(fetchUsers())
//     // dispatch(addUserPhoto())

//   }, [dispatch, match])
   
//   const renderUser = () => {
//     if (loading.user) return <p>Loading User...</p>
//     if (hasErrors.user) return <p>Unable to display User.</p>
//     return <User key={user.id} user={user} /> 
//   }

//   const renderTalent = () => {
//     if (loading.talent) return <p>Loading Talent...</p>
//     if (hasErrors.talent) return <p>Unable to display Talent.</p>
//     return <Talent key={talent.id} talent={talent} />
//   }

//   if (user){
//   return (
//     <section className="renderUser">
//       <h2>Vox Act Client Profile</h2>
//       {renderUser()}
//       {user && renderTalent()}
//     </section>
//   );
//   } else {
//     return <p>Loading...</p>;
//   }
// }
      
// const mapStateToProps = ({ userReducer, talentsReducer }) => ({ 
//   user: userReducer.user,
//   talent: talentsReducer.talent,
//   loading: { 
//     user: userReducer.loading, 
//     talents: userReducer.loading 
//   },

//   hasErrors: { 
//     user: userReducer.hasErrors, 
//     talents: userReducer.hasErrors 
//   },
// })

// export default connect(mapStateToProps)(TalentPage)

