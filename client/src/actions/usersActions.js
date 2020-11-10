const USERSURL = "http://localhost:3000/users"
const LOGINURL = "http://localhost:3000/login"

export const LOADING_USERS = 'LOADING_USERS'
export const ADD_USER = 'ADD_USERS'
export const ADD_USERS_SUCCESS = 'ADD_USERS_SUCCESS'
export const REMOVE_USER = 'REMOVE_USER'
export const LOADING_USER = 'LOADING_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_ERROR = 'LOGIN_ERROR'


//ADD USER
export const addUser = (user) => {
  return async (dispatch) => {
    const configUser = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({
        user: user,
        
      })
    }
    
   dispatch({type: 'LOADING_USERS'})

    return fetch(USERSURL, configUser)
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


//GET USERS
export const GET_USERS = 'GET_USERS'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const getUsers = () => ({
  type: GET_USERS,
})
export const getUserSuccess = (users) => ({
  type: GET_USERS_SUCCESS,
  payload: users,
})
export const GET_USERS_FAILURE = 'USER_ACTION_FAILURE'
export const userActionFailure = () => ({
  type: GET_USERS_FAILURE,
})


export function fetchUsers() {
  return async (dispatch) => {
    dispatch(getUsers())

    try {
      const resp = await
      fetch(USERSURL)
      const userJSON = await resp.json()
      dispatch(getUserSuccess(userJSON))
      console.log('getUsers from actions', userJSON)
    }
    catch (error) {  
      alert('No users available')
      dispatch(userActionFailure())
    }
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
    return fetch(LOGINURL, configLogin)
    .then(resp => resp.json())
    .then(userJSON => {
      console.log('login resp', userJSON)
      if (userJSON.error) {
        alert("Sorry. Not a Vox Act client? Sign up...")
        dispatch({ type: 'LOGIN_ERROR', error: userJSON.error})
      } 
      else {
        dispatch({ type: 'LOGIN_USER', user: userJSON })
        // dispatch({ type: 'GET_USER', user: user })
      }
    })
    .catch(console.log)  
  }
}