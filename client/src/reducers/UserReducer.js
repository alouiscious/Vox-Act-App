import * as userActions from '../actions/userActions'

export const initialState = {
  loading: false, 
  hasErrors: false,
  user: [],
}

export default function userReducer(state = initialState, action) {
  console.table(state)
  console.log('reducer user', state)
  switch(action.type) {
    case userActions.LOADING_USER:
      const user = ({
        id: action.id,
        user_name: action.user_name, 
        hometown: action.hometown, 
        email: action.email, 
        password: action.password,
        upid: action.upid,
        upph: action.upph
      })
      return  {...state, user, loading: true}
    case userActions.GET_USER:
      return { ...state.user, loading: true }
    case userActions.GET_USER_SUCCESS:
      return { user: action.payload, loading: false, hasErrors: false }
    case userActions.GET_USER_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    case userActions.ADD_USER_PHOTO:
      const userPhoto = {upph: action.upph}
      return { ...state, userPhoto }
    default:
      return state
    }
  }
