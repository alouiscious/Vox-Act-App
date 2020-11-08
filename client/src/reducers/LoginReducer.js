import * as loginActions from "../actions/loginActions";

const initialState = {
  loading: false, 
  hasErrors: false,
  users: [],
}
export default function loginReducer(state = initialState, action) {

  switch(action.type) {
    case loginActions.LOADING_USER:
      return {...state, loading: true}

    case loginActions.LOGIN_USER:
    const user = ({
       email: action.email,
      password: action.password
    })
    return ({
      user: [action.user, {loggedIn: true}, {loading: false}],
      ...state, 
      users: [ ...state.users, action.user, user ]
    })

    case loginActions.LOGIN_ERROR:
      return ({...state, loginError: action.error})
    
    default:
      return state
  }
}



