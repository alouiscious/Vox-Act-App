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


// const initialState = {
//   loading: false, 
//   hasErrors: false,
//   users: [],
// }
function loginReducer(state = [], action) {
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


      default:
        return state
  }
}

export default rootReducer
