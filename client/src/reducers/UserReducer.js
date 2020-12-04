import * as usersActions from '../actions/usersActions'
import * as userActions from '../actions/userActions'

export const initialState = {
  user: [],
  list: [],
  loading: true, 
  hasErrors: false,
}

// let idx
export default function userReducer(state = initialState, action) {
  console.table('actions from userreducer', action)
  // console.table('state from userReducer', state)
  
  switch(action.type) {
    
    case userActions.LOADING_USER:
      // idx = state.list.findIndex(user => user.email === action.email)
      return { ...state, loading: true}

    case userActions.GET_USER:
      // idx = state.list.findIndex(user => user.email === action.email)
      return { ...state, loading: true }
  case userActions.GET_USER_SUCCESS:
     return { user: action.payload, loading: false, hasErrors: false }
    case userActions.GET_USER_FAILURE:
      return { ...state, loading: false, hasErrors: true }
  
    case userActions.LOGIN_USER:
      const user = {
        email: action.email,
        password: action.password,
      }
      console.table('user obj for login action', user)
      return (
        { 
          user: action.user, loggedIn: true, loading: false,
          ...state, 
          list: [...state.user, action.user, user ],
        })
        // return {...state, loading: true, id: action.id, user_name: action.user_name, upid: action.upid}
      case userActions.LOGIN_USER_SUCCESS:
        return { user: action.payload, id: action.id, loading: false, hasErrors: false }
  
    case userActions.LOGIN_ERROR:
      return ({...state, loginError: action.error})
    case userActions.LOGOUT:
      return ({...state, logout: true})

    default:
      return state
    }
  }
