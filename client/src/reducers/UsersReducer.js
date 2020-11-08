import * as usersActions from "../actions/usersActions";

const initialState = {
  loading: false, 
  hasErrors: false,
  users: [],
}
export default function usersReducer(state = initialState, action) {
  let idx

  switch(action.type) {
    case usersActions.LOADING_USERS:
      const user = {
        userName: action.user_name, 
        hometown: action.hometown, 
        email: action.email, 
        password: action.password,
        upid: action.upid,
        photo: action.upph
      }
      return  {...state, user, loading: true}

    case usersActions.GET_USERS:
      return {...state, loading: true}

    case usersActions.GET_USERS_SUCCESS:
      return {users: action.payload, loading: false, hasErrors: false}

    case usersActions.GET_USERS_FAILURE:
      return{...state, loading: false, hasErrors: true}

    case usersActions.ADD_USER:
      
      return {...state, user}
        // ...state, users: [...state.users, action.user, user]
  
    case usersActions.REMOVE_USER:
      idx = state.users.findIndex(user => user.id === action.id)
      return (
        {...state,
          user: [
            ...state.users.slice(0, idx),
            ...state.users.slice(idx + 1)
          ]
        }
      )
   
    default:
      return state
  }
}



