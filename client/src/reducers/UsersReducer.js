// import all actions
import * as usersActions from "../actions/usersActions"

export const initialState = {
  users: [],
  loading: false, 
  hasErrors: false,
}
// let idx

export default function usersReducer(state = initialState, action) {
  switch (action.type) { 
    case usersActions.GET_USERS:
      return { ...state, loading: true }
    case usersActions.GET_USERS_SUCCESS:
      return { users: action.payload, loading: false, hasErrors: false }
    case usersActions.GET_USERS_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}            
      //     case usersActions.ADD_USER:
//       const user = {
//         id: action.id,
//         userName: action.user_name, 
//         hometown: action.hometown, 
//         email: action.email, 
//         password: action.password,
//         upid: action.upid,
//         photo: action.upph
//       }
//       // console.log('user  - usersRed LOADING_USER after login', user)
//       return {
//         ...state,
//         users: [...state.users, user]
//       }
      
      
//     case usersActions.REMOVE_USER:
//       idx = state.users.findIndex(user => user.id === action.id)
//       return (
//         {...state,
//           user: [
//             ...state.users.slice(0, idx),
//             ...state.users.slice(idx + 1)
//           ]
//         }
//       )

//     case usersActions.LOGIN_USER:
//       // console.log('action login', action)
//       return ({
//         ...state, 
//         user: {...action.user, loggedIn: true, loading: false},
//       })

//     case usersActions.LOGIN_ERROR:
//       return ({...state, loginError: action.error})
    
