
export const LOADING_USER = 'LOADING_USER'
export const REMOVE_USER = 'REMOVE_USER'

const USERURL = "http://localhost:3000/users"

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
        user: user,
      })
    }
      
    dispatch({ type: 'LOADING_USER'})
      
    return fetch(USERURL, configUser)
    .then(resp => resp.json())
    .then(userJSON => {
      dispatch({ type: 'ADD_USER', user: userJSON })
      if (userJSON.error) {
        alert("Vox Act user creation not complete. - Please try again.")
      } 
    })
    .catch(console.log)  
  }
}

export const GET_USER = 'GET_USER'
export const getUser = () => ({
  type: GET_USER,
})

export const GET_USER_SUCCESS = 'GET_USERS_SUCCESS'
export const getUserSuccess = (user) => ({
  type: GET_USER_SUCCESS,
  payload: user,
})

export const GET_USER_FAILURE = 'USER_ACTION_FAILURE'
export const userActionFailure = () => ({
  type: GET_USER_FAILURE,
})

export function fetchUser() {
  return async (dispatch) => {
    dispatch(getUser())

    try {
      const resp = await
      fetch(USERURL +`/id`)
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

export default ( fetchUser, addUser, addUserPhoto )