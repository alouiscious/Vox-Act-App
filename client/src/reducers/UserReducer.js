import * as userActions from "../actions/userActions";

export const initialState = {
  user: null,
  list: [],
  loading: true,
  hasErrors: false,
  logged_in: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case userActions.LOGIN_USER:
      const user = {
        email: action.email,
        password: action.password,
      };
      console.log("case login user", {
        user: action.user, list: action.payload, logged_in: true, loading: false,
      });
      return {
        ...state,
        user: action.user,
        logged_in: true,
        loading: false,
        list: [state.current_user, action.user, user],
      };
    // return {...state, loading: true, id: action.id, user_name: action.user_name, upid: action.upid}
    case userActions.LOGIN_USER_SUCCESS:
      console.log("case login user success", {
        // userAction: action.user,
        // list: [state.current_user, action.user, user],
        user: action.payload,
        logged_in: true,
        id: action.payload.id,
        loading: false,
        hasErrors: false,
      });
      return {
        user: action.payload,
        id: action.payload.id,
        loading: false,
        hasErrors: false,
      };
    case userActions.LOGIN_ERROR:
      return { ...state, loginError: action.error };


    case userActions.GET_CURRENT_USER:
      return {...state, loading: true };
    case userActions.GET_CURRENT_USER_SUCCESS:
      return { user: action.payload, loading: false, hasErrors: false };
    case userActions.GET_CURRENT_USER_FAILURE:
      return { ...state, loading: false, hasErrors: true };
        
    case userActions.LOADING_USER:
      return { ...state, loading: true };
    case userActions.GET_USER:
      return { ...state, loading: true };
    case userActions.GET_USER_SUCCESS:
      return { user: action.payload, loading: false, hasErrors: false };
    case userActions.GET_USER_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    
    
    case userActions.ADD_USER_PHOTO:
      return { ...state, loading: false };
    case userActions.ADD_USER_PHOTO_SUCCESS:
      console.table('adduser  - usersRed LOADING_USER after create', {
        upph: state.upph,
        loading: false,
        hasErrors: false,

      })
      return {
        ...state,
        upph: state.upph,
        loading: false,
      };

    case userActions.ADD_USER_PHOTO_FAILURE:
      return { ...state, loading: false, hasErrors: true };

    case userActions.LOGOUT:
      return { ...state, logged_in: true, logout: true };

    default:
      return state;
  }
}
