const USERSURL = "http://localhost:3000/users"

export const LOADING_USERS = 'LOADING_USERS'
export const GET_USERS = 'GET_USERS'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_FAILURE = 'USER_ACTION_FAILURE'

//GET USERS
export const getUsers = () => ({
  type: GET_USERS,
})
export const getUserSuccess = (users) => ({
  type: GET_USERS_SUCCESS,
  payload: users,
})

export const usersActionFailure = () => ({
  type: GET_USERS_FAILURE,
})

export function fetchUsers() {
  return async dispatch => {
    dispatch(getUsers())
    
    try {
      const resp = await
      fetch(USERSURL)
      const usersJSON = await resp.json()
      dispatch(getUserSuccess(usersJSON))
      console.log('getUsers from actions', usersJSON)
      // dispatch({type: 'LOADING_USERS'})
      // dispatch({ type: 'GET_USERS', users: usersJSON })      
      // if (usersJSON) {
    } catch {
      // dispatch({ type: 'GET_USERS_FAILURE', error: usersJSON.error})
      alert('No Users available(75)')
      dispatch(usersActionFailure())
    }
    
  }
}

export const LOADING_USER = 'LOADING_USER'
export const ADD_USER = 'ADD_USERS'
export const ADD_USERS_SUCCESS = 'ADD_USERS_SUCCESS'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const REMOVE_USER = 'REMOVE_USER'


//ADD USER
export const addUser = (user) => {
  return async (dispatch) => {
    const configUser = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'true',
      body: JSON.stringify({
        user: user,
        
      })
    }
    
   dispatch({type: 'LOADING_USERS'})

    return fetch(USERSURL, configUser)
    .then(resp => resp.json())
    .then(userJSON => {
      dispatch({ type: 'ADD_USER', users: userJSON })
      if (userJSON.error) {
        alert("Vox Act user creation not complete. - Please try again.")
      } else {
        
        dispatch({ type: 'ADD_USER_SUCESS', users: userJSON })
      }
    })
    .catch(console.table) 
  }
}


export const loginUser = (user) => {
  return (dispatch) => {
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
    return fetch(USERSURL, configLogin)
    .then(resp => resp.json())
    .then(userJSON => {
      console.log('login resp', userJSON)
      if (userJSON.error) {
        alert("Sorry. Not a Vox Act client? Sign up...")
        dispatch({ type: 'LOGIN_ERROR', error: userJSON.error})
      } 
      else {
        dispatch({ type: 'LOGIN_USER', users: userJSON })
      }
    })
    .catch(console.log)  
  }
}
export default ( fetchUsers, addUser, loginUser, getUserSuccess )