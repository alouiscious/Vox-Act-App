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

// Get Client List
export function fetchUsers() {
  return async (dispatch) => {
    dispatch({type: 'LOADING_USERS'})
    dispatch(getUsers())

    try {
      const resp = await
      fetch(USERSURL)
      const usersJSON = await resp.json()
      dispatch(getUsersSuccess(usersJSON))
      // console.table('getUsersSuc from actions', usersJSON)
    } 
    catch (error) {
      dispatch(usersActionFailure())
      alert('No Users available from usersActions')
    }
  }
}
      
export const ADD_USERS = 'ADD_USERS'
export const ADD_USERS_SUCCESS = 'ADD_USERS_SUCCESS'
export const ADD_USERS_FAILURE = 'ADD_USERS_FAILURE'

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
      // if (userJSON.error) {
      //   alert("Vox Act client creation not complete. - Please try again.")
      //   dispatch({ type: 'ADD_USERS_FAILURE' })
      // } else {
        dispatch({ type: 'ADD_USERS', user: userJSON.user })
        dispatch({ type: 'ADD_USER_SUCESS', user: userJSON.user })
      // }
    })
    .catch(console.table) 
  }
}

export const REMOVE_USER = 'REMOVE_USER'

export default ( fetchUsers, addUsers )
