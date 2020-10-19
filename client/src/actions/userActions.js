const LOGINURL = "http://localhost:3000/login"

export const LOADING_USER = 'LOADING_USER'
export const REMOVE_USER = 'LOADING_USER'

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
const ADDUSER_URL = "http://localhost:3000/users/id"

export const ADD_USER = 'ADD_USER'
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS'

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
      
    dispatch({ type: 'LOADING_USER'})
      
    return fetch(ADDUSER_URL, configUser)
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

export const GET_USER = 'GET_USER'
export const fetchUser = () => ({
  type: GET_USER,
})
export const GET_USER_SUCCESS = 'GET_USERS_SUCCESS'
export const getUserSuccess = (users) => ({
  type: GET_USER_SUCCESS,
  payload: users,
})
export const GET_USER_FAILURE = 'USER_ACTION_FAILURE'
export const userActionFailure = () => ({
  type: GET_USER_FAILURE,
})
export function getUsers() {
  return async (dispatch) => {
    dispatch(fetchUser())

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
    
export const ADD_USER_PHOTO = 'ADD_USER_PHOTO'
export const addUserPhoto = (userPhoto) => {
  
  return async (dispatch) => {
    const configUser = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({
        userPhoto: userPhoto
      })
    }
    console.log('addUser from addUser (16)', userPhoto)
    
   dispatch({type: 'LOADING_USERS'})

    return fetch(ADDUSER_URL, configUser)
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


export default {
  loginUser,
  getUsers, 
  addUser, 
  addUserPhoto,
}