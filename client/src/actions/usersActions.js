const USERSURL = "http://localhost:3000/users"

// Create Redux action types
export const LOADING_USERS = 'LOADING_USERS'
export const GET_USERS = 'GET_USERS'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE'

// Create Redux action creators that return an action
//GET USERS
export const loadUsers = () => ({ type: LOADING_USERS })
export const getUsersSuccess = (list, user) => ({
  type: GET_USERS_SUCCESS,
  payload: list, user,
})
export const usersActionFailure = () => ({ type: GET_USERS_FAILURE })

// Get Users List
export function fetchUsers() {
  const configUsers = {
    method: "GET",
    headers: {
      "Content-Type": "appliction/json",
      "Accept": "application/json"
    },
    credentials: "include"
  }
  return async (dispatch) => {
    dispatch(loadUsers())
    try {
      const resp = await
      fetch(USERSURL, configUsers)
      const usersJSON = await resp.json()
      dispatch(getUsersSuccess(usersJSON))
      console.table('getUsersSuc usersJSON', usersJSON)
    } 
    catch (error) {
      dispatch(usersActionFailure())
      if (window.confirm("No Vox Act clients available. - Please try again.")) {
        window.open("localhost:3001/userInput", "Sign up now OR Sign In?");
      }
    }
  }
}
      
export const ADD_USERS_SUCCESS = 'ADD_USERS_SUCCESS'
export const ADD_USERS_FAILURE = 'ADD_USERS_FAILURE'

export const addUserSuccess = (user) => ({ 
  type: ADD_USERS_SUCCESS,
  payload: user,
})

export const addUserFailure = () => ({
  type: ADD_USERS_FAILURE,
})


//ADD USER
export const addUser = (user) => {
  const configAddUser = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    credentials: 'include',
    body: JSON.stringify({
      user: user,
    })
  }
  return async (dispatch) => {
    try {
      const resp = await fetch(USERSURL, configAddUser)
      const userJSON = await resp.json()
      if (resp.ok){
        dispatch(loadUsers())
        dispatch(addUser())
        dispatch(addUserSuccess(userJSON.user))
      }
      else {
        dispatch(addUserFailure())
        if (window.confirm("Vox Act client already exists. - Please try again.")) {
          window.open("localhost:3001/VoxActSignUp/", "sign up now?", "replacetrue");
        }
      }
    }
    catch(eror) {
      dispatch(addUserFailure())
      window.open(`localhost:3001/UserPage`)
    }
  }
}

export const REMOVE_USER = 'REMOVE_USER'

export default ( fetchUsers, addUser )
