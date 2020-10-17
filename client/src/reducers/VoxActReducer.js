import { combineReducers } from "redux";
import talentsReducer from "./TalentsReducer";
import userReducer from "./UserReducer";
import usersReducer from "./UsersReducer";

const rootReducer = combineReducers({
  user: userReducer,
  users: usersReducer,
  login: loginReducer,
  talents: talentsReducer
})


const initialState = {
  loading: false, 
  hasErrors: false,
  users: [],
}
function loginReducer(state = initialState, action) {
  switch(action.type) {
  
    case 'LOADING_USER':
      return { ...state, loading: true}

    case 'LOGIN_USER':
      const user = ({
        email: action.email,
        password: action.password
      })
      return ({
        user: action.user, loggedIn: true, loading: false,
        ...state, 
        users: [ ...state.users, action.user, user ]
      })

    case 'LOGIN_ERROR':
      return ({...state, loginError: action.error})

    case 'REMOVE_USER':
      const removalIndex = state.users.findIndex(user => user.id === action.id)
      return (
        {...state,
          users: [
            ...state.users.slice(0, removalIndex),
            ...state.users.slice(removalIndex + 1)
          ]
        }
      )
      default:
        return state
  }
}

export default rootReducer
