const LOGINURL = "http://localhost:3000/login"

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
    return fetch(LOGINURL, configLogin)
    .then(resp => resp.json())
    .then(userJSON => {
      if (userJSON.error) {
        alert("Sorry. Not a Vox Act client? Sign up...")
        dispatch({ type: 'LOGIN_ERROR', error: userJSON.error})
      } 
      else {
        dispatch({ type: 'LOGIN_USER', user: userJSON})
      }
    })
    .catch(console.log)  
  }
}

const USERURL = "http://localhost:3000/users"
export const ADD_USER = 'ADD_USERS'
export const ADD_USER_SUCCESS = 'ADD_USERS_SUCCESS'

export const addUser = (user) => {
  
  return (dispatch) => {
    
    const configUser = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({
        user: user
      })
    }
    console.log('addUser from userActions (50)', user)
      
    dispatch({ type: 'LOADING_USER'})
      
    return fetch(USERURL, configUser)
    .then(resp => resp.json())
    .then(userJSON => {
      dispatch({ type: 'ADD_USER', user: userJSON})
      if (userJSON.error) {
        alert("Vox Act user creation not complete. - Please try again.")
      } 
    })
    .catch(console.log)  
  }
}

export const GET_USERS = 'GET_USERS'
export const fetchUsers = () => ({
  type: GET_USERS,
})
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const getUserSuccess = (users) => ({
  type: GET_USERS_SUCCESS,
  payload: users,
})
export const USER_ACTION_FAILURE = 'USER_ACTION_FAILURE'
export const userActionFailure = () => ({
  type: USER_ACTION_FAILURE,
})
export function getUsers() {
  return async (dispatch) => {
    dispatch(fetchUsers())

    try {
      fetch(USERURL)
      .then(resp => resp.json())
      // (userJSON => await resp.json())
      .then((userJSON) => {
        dispatch(getUserSuccess(userJSON))
        console.log('getUsers from actions', userJSON.users)
      })
    }
    catch (error) {  
      alert('No users available')
      dispatch(userActionFailure())
    }
  }

}
    

export default {
  loginUser,
  getUsers, 
  addUser, 
}