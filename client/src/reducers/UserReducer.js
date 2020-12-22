import * as userActions from '../actions/userActions'

export const initialState = {
  user: [],
  list: [],
  loading: true, 
  hasErrors: false,
  logged_in: false,
}

export default function userReducer(state = initialState, action) {
  console.table('actions from userreducer is called', action)
  
  switch(action.type) {
    case userActions.LOADING_USER:
      return { ...state, loading: true}
    case userActions.GET_USER:
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

      return (
        { 
          ...state, 
          user: action.user, logged_in: true, loading: false,
          list: [state.current_user, action.user, user ],
        }
      )
        // return {...state, loading: true, id: action.id, user_name: action.user_name, upid: action.upid}
      case userActions.LOGIN_USER_SUCCESS:
        console.log("case login user success", { user: action.payload, id: action.payload.id, loading: false, hasErrors: false })
        return { user: action.payload, id: action.payload.id, loading: false, hasErrors: false }
  
    case userActions.LOGIN_ERROR:
      return ({...state, loginError: action.error})
    case userActions.LOGOUT:
      return ({...state, logout: true})

    default:
      return state
    }
  }
