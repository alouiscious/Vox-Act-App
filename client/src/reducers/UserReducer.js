import * as userActions from "../actions/userActions";


const initialState = {
  loading: false, 
  hasErrors: false,
  users: [],
}
export default function userReducer(state = initialState, action) {
  let idx

  switch(action.type) {
    
    case userActions.LOADING_USER:
      const user = {
        userName: action.user_name, 
        hometown: action.hometown, 
        email: action.email, 
        password: action.password,
        upid: action.upid,
        photo: action.upph
      }
      return  [...state, user, {loading: true}]

    case userActions.GET_USER:
      return {...state, loading: true}

    case userActions.GET_USER_SUCCESS:
      return {users: action.payload, loading: false, hasErrors: false}

    case userActions.GET_USER_FAILURE:
      return{...state, laoding: false, hasErrors: true}

    case userActions.ADD_USER:
      console.log('user', this.state.user)

      return [...state, user]
        // ...state, users: [...state.users, action.user, user]
  
    case userActions.REMOVE_USER:
      idx = state.users.findIndex(user => user.id === action.id)
      return (
        {...state,
          users: [
            ...state.users.slice(0, idx),
            ...state.users.slice(idx + 1)
          ]
        }
      )
  
    default:
      return state
  }
}
