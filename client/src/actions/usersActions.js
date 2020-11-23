const USERSURL = "http://localhost:3000/users"

// Create Redux action types
export const LOADING_USER = 'LOADING_USER'
export const GET_USERS = 'GET_USERS'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_FAILURE = 'USER_ACTION_FAILURE'

// Create Redux action creators that return an action
//GET USERS
export const getUsers = () => ({ type: GET_USERS })

export const getUsersSuccess = list => ({
  type: GET_USERS_SUCCESS,
  payload: list,
})

export const usersActionFailure = () => ({
  type: GET_USERS_FAILURE
})

export function fetchUsers() {
  return async (dispatch) => {
    dispatch({type: 'LOADING_USERS'})
    dispatch(getUsers())
    // dispatch({ type: 'GET_USERS', list: usersJSON })      
    try {
      const resp = await
      fetch(USERSURL)
      const usersJSON = await resp.json()
      console.log('getUsers from actions', usersJSON)
      dispatch(getUsersSuccess(usersJSON))
    } 
    catch (error) {
      alert('No Users available(75)')
      dispatch(usersActionFailure())
      // dispatch({ type: 'GET_USERS_FAILURE', error: usersJSON.error})
    }
  }
}
      
export const ADD_USERS = 'ADD_USERS'
export const ADD_USERS_SUCCESS = 'ADD_USERS_SUCCESS'
export const ADD_USERS_FAILURE = 'ADD_USERS_FAILURE'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const REMOVE_USER = 'REMOVE_USER'


//ADD USER
export const addUsers = (user) => {
  return async (dispatch) => {
    const configAddUser = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      // credentials: 'include',
      body: JSON.stringify({
        user: user,
      })
    }
    dispatch({type: 'LOADING_USERS'})
    
    return fetch(USERSURL, configAddUser)
    .then(resp => resp.json())
    .then(userJSON => {
      // if (userJSON.error) {
      //   alert("Vox Act user creation not complete. - Please try again.")
      //   dispatch({ type: 'ADD_USERS_FAILURE' })
      // } else {
        dispatch({ type: 'ADD_USERS', user: userJSON })
        dispatch({ type: 'ADD_USER_SUCESS', user: userJSON.user })
      // }
    })
    .catch(console.table) 
  }
}


export const loginUser = (user) => {
  return async (dispatch) => {
    const configLogin = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({
        user: user
      })
    }
    dispatch({ type: 'LOADING_USER'})
    fetch(USERSURL, configLogin)
    .then(resp => resp.json())
    .then(loginJSON => {
      console.log('login resp', loginJSON)
      if (loginJSON.error) {
        alert("Sorry. Not a Vox Act client? Sign up...")
        dispatch({ type: 'LOGIN_ERROR', error: loginJSON.error})
      } 
      else {
        dispatch({ type: 'LOGIN_USER', user: loginJSON })
      }
    })
    .catch(console.log)  
  }
}
export default ( fetchUsers, addUsers, loginUser )
