import * as usersActions from "../actions/usersActions";

const initialState = {
  loading: false, 
  hasErrors: false,
  users: [],
}
export default function usersReducer(state = initialState, action) {
  let idx

  switch(action.type) {
    
    case usersActions.LOADING_USER:
      const user = {
        userName: action.user_name, 
        hometown: action.hometown, 
        email: action.email, 
        password: action.password,
        upid: action.upid,
        photo: action.upph
      }
      return  [...state, user, {loading: true}]

    case usersActions.GET_USERS:
      return {...state, loading: true}

    case usersActions.GET_USERS_SUCCESS:
      return {users: action.payload, loading: false, hasErrors: false}

    case usersActions.GET_USERS_FAILURE:
      return{...state, laoding: false, hasErrors: true}

    case usersActions.LOADING_USERS:
      return { ...state, loading: true}

   
    default:
      return state
  }
}



