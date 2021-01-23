const USERSURL = "http://localhost:3000/users"

// Create Redux action types
export const LOADING_USERS = 'LOADING_USERS'
export const GET_USERS = 'GET_USERS'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE'

// Create Redux action creators that return an action
//GET USERS
export const getUsers = () => ({ type: GET_USERS })
export const getUsersSuccess = list => ({
  type: GET_USERS_SUCCESS,
  payload: list,
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
    dispatch(getUsers())
    try {
      const resp = await
      fetch(USERSURL, configUsers)
      const usersJSON = await resp.json()
      dispatch(getUsersSuccess(usersJSON))
      console.table('getUsersSuc usersJSON', usersJSON)
    } 
    catch (error) {
      dispatch(usersActionFailure())
      alert('No Users available from fetchUsers')
    }
  }
}
      
export const ADD_USERS = 'ADD_USERS'
export const ADD_USERS_SUCCESS = 'ADD_USERS_SUCCESS'
export const ADD_USERS_FAILURE = 'ADD_USERS_FAILURE'

export const addUser = () => ({ type: ADD_USERS })
export const addUserSuccess = (user) => ({ 
  type: ADD_USERS_SUCCESS,
  payload: user,
})

export const addUserFailure = () => ({
  type: ADD_USERS_FAILURE,
})


//ADD USER
export const addUsers = (user) => {
  return async (dispatch) => {
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
    dispatch({type: 'LOADING_USERS'})
    
    return fetch(USERSURL, configAddUser)
    .then(resp => resp.json())
    .then(userJSON => {
      if (userJSON.error) {
        dispatch({ type: 'ADD_USERS_FAILURE' })
        if (window.confirm("Vox Act client creation not complete. - Please try again.")) {
          window.open("localhost:3001/userInput.html", "sign up now?");
        }
      } else {
        dispatch({ type: 'ADD_USERS', user: userJSON.user })
        dispatch({ type: 'ADD_USER_SUCESS', user: userJSON.user })
      }
    })
    .catch(console.table) 
  }
}

export const REMOVE_USER = 'REMOVE_USER'

export default ( fetchUsers, addUsers )
