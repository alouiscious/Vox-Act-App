// import all actions
import * as usersActions from "../actions/usersActions"

export const initialState = {
  list: [],
  loading: false, 
  hasErrors: false,
}
let idx
export default function usersReducer(state = initialState, action) {
  (console.log('actions from usersreducer', action))
  switch (action.type) { 
    case usersActions.GET_USERS:
      return { ...state, loading: true }
    case usersActions.GET_USERS_SUCCESS:
      return { list: action.payload, loading: false, hasErrors: false }
    case usersActions.GET_USERS_FAILURE:
      return { ...state, loading: false, hasErrors: true }
          
      case usersActions.ADD_USERS:
        return { ...state, loading: false }
        case usersActions.ADD_USERS_SUCCESS:
          // console.log('adduser  - usersRed LOADING_USER after create', state.list)
      return {
        ...state,
        user: state.user, loading: false
      }
    case usersActions.ADD_USERS_FAILURE:
      return {...state, loading: false, hasErrors: true}
      
    case usersActions.REMOVE_USER:
      idx = state.list.findIndex(user => user.id === action.id)
      return (
        {...state,
          user: [
            ...state.users.slice(0, idx),
            ...state.users.slice(idx + 1)
          ]
        }
      )

    case usersActions.LOGIN_USER:
      // console.log('action login', action)
      return ({
        ...state, 
        user: {...action.user, loggedIn: true, loading: false},
      })

    case usersActions.LOGIN_ERROR:
      return ({...state, loginError: action.error})
    
      default:
        return state
    }
  }  