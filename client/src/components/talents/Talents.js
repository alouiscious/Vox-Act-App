// import React from "react";
// import { getTalents } from "../../actions/talentActions";
// import { fetchClient } from "../../actions/userActions";

// // componentDidMount(){
// //   this.props.getUsers()
// //   this.props.getTalents()
// // }

// export const Talents = () => {
//   const users = {fetchClient}
//   const { talents, deleteTalent } = {getTalents}

//   console.log('Wa Ha Talents', talents)

//     // const associatedTalents = talents.filter_by(talent => 
//     //   talent.user.id === this.props.user.id
//     //   )
//     // const userTalents = associatedTalents.map(talent => {
//     //     (talent.userId === this.props.userId), 
//     //     talent, 
//     //     index
//     return (
//       <div>
//         <h1> Talents' List</h1>
//       {users.map((user, index) => 
//       <div> key={index} 
        
//         <h4> User: {user.user_name}, {user.hometown}</h4>
//         <p>Talents:</p>
//         <ul>
//               {user.talents.map((talent, index) => 
//                   <li key={index}>{talent}
//                     <button type="text" value={deleteTalent}>Delete Talent</button> 
//                   </li>
//               )}
//           </ul>
//       </div>
//       )}
//     </div>
//   )
  
// }

// export default Talents