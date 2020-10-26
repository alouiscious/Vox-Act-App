import {v4 as uuid} from 'uuid'

const USERSURL = "http://localhost:3000/users"
export const LOADING_USERS = 'LOADING_USERS'
export const ADD_USER = 'ADD_USERS'
export const ADD_USER_SUCCESS = 'ADD_USERS_SUCCESS'


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
        user: user
      })
    }
    console.log('addUser from addUser (16)', user)
    
   dispatch({type: 'LOADING_USERS'})

    return fetch(USERSURL, configUser)
    .then(resp => resp.json())
    .then(userJSON => {
      dispatch({ type: 'ADD_USER', user: userJSON, upid: (uuid())})
      if (userJSON.error) {
        alert("Vox Act user creation not complete. - Please try again.")
      } 
    })
    .catch(console.log) 
  }
}


//GET USERS
export const GET_USERS = 'GET_USERS'
export const getUsers = () => ({
  type: GET_USERS,
})
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
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
      console.log('getUsers from actions', userJSON.users)
    }
    catch (error) {  
      alert('No users available')
      dispatch(userActionFailure())
    }
  }
}
    

