// import * as talentActions from "../actions/talentActions";

// export const initialState = {
//   loading: false,
//   hasErrors: false,
//   talents: []
// }

// export default function talentsReducer(state = initialState, action) {
//   let idx

//   switch (action.type) {
//     case talentActions.LOADING_TALENTS:
//       const talent = {
//         talent_style: action.talent_style,
//         user_name:  action.user_name,
//         upid:  action.upid,
//         title: action.title,
//         description:  action.description,
//         phmf:  action.phmf,
//         vimf:  action.vimf,
//         aumf:  action.aumf,
//       }
//       return [...state, talent, {loading: true}]
      
//       case talentActions.ADD_TALENT:
//         let existingUser = state.filter(
//           user => user.user_name === action.talent.user_name
//         );
//         if (existingUser.length > 0) {
//           return state;
//         } else {
//           return [...state, {loading: true}, { user_name: action.user_name, upid: action.upid}];
//         }
//     case talentActions.GET_TALENTS:
//       return { ...state, loading: true }

//     case talentActions.GET_TALENTS_SUCCESS:
//       return { ...state, talents: action.payload, loading: false}

//     case talentActions.GET_TALENTS_FAILURE:
//       return { ...state, loading: false, hasErrors: true } 

//     case talentActions.DELETE_TALENT:
//       idx = state.talents.findIndex(talent => talent.id === action.id)
//       return [
//         ...state.talents.slice(0, idx), 
//         ...state.talents.slice(idx + 1)
//       ]

//     default:
//       return state
//   }
// }


