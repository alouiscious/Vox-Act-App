const USERSURL = "http://localhost:3000/users"

// Create Redux action types
export const GET_USERS = 'GET_USERS'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_FAILURE = 'USER_ACTION_FAILURE'

// Create Redux action creators that return an action
//GET USERS
export const getUsers = () => ({ type: GET_USERS })

export const getUsersSuccess = users => ({
  type: GET_USERS_SUCCESS,
  payload: users,
})

export const usersActionFailure = () => ({
  type: GET_USERS_FAILURE
})

export function fetchUsers() {
  return async dispatch => {
    fetch(USERSURL)
    .then(resp => resp.json())
    .then(usersJSON => {
      if (usersJSON) {
        dispatch(getUsers())
        console.log('getUsers from actions', usersJSON)
        dispatch(getUsersSuccess(usersJSON))
      dispatch({type: 'LOADING_USERS'})
      dispatch({ type: 'GET_USERS', users: usersJSON })      
      } else {
        alert('No Users available(75)')
        dispatch(usersActionFailure())
      }
    // dispatch({ type: 'GET_USERS_FAILURE', error: usersJSON.error})
    })
  }
}

export const LOADING_USER = 'LOADING_USER'
// export const ADD_USER = 'ADD_USERS'
// export const ADD_USERS_SUCCESS = 'ADD_USERS_SUCCESS'
// export const ADD_USERS_FAILURE = 'ADD_USERS_FAILURE'
// export const LOGIN_USER = 'LOGIN_USER'
// export const LOGIN_ERROR = 'LOGIN_ERROR'
// export const REMOVE_USER = 'REMOVE_USER'


// //ADD USER
// export const addUser = (user) => {
//   return async (dispatch) => {
//     const configUser = {
//       // mode: 'no-cors',
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//       },
//       credentials: 'include',
//       body: JSON.stringify({
//         user: user,
//       })
//     }
    
//    dispatch({type: 'LOADING_USERS'})

//     fetch(USERSURL, configUser)
//     .then(resp => resp.json())
//     .then(userJSON => {
//       if (userJSON.error) {
//         dispatch({ type: 'ADD_USERS_FAILURE' })
//         alert("Vox Act user creation not complete. - Please try again.")
//       } else {
//         dispatch({ type: 'ADD_USER', users: userJSON })
//         dispatch({ type: 'ADD_USER_SUCESS', users: userJSON.user })
//       }
//     })
//     .catch(console.table) 
//   }
// }


// export const loginUser = (user) => {
//   return async (dispatch) => {
//     const configLogin = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       credentials: 'include',
//       body: JSON.stringify({
//         user: user
//       })
//     }
//     dispatch({ type: 'LOADING_USER'})
//     fetch(USERSURL, configLogin)
//     .then(resp => resp.json())
//     .then(userJSON => {
//       console.log('login resp', userJSON)
//       if (userJSON.error) {
//         alert("Sorry. Not a Vox Act client? Sign up...")
//         dispatch({ type: 'LOGIN_ERROR', error: userJSON.error})
//       } 
//       else {
//         dispatch({ type: 'LOGIN_USER', users: userJSON })
//       }
//     })
//     .catch(console.log)  
//   }
// }
// export default ( fetchUsers, addUser, loginUser, getUserSuccess )
export default ( fetchUsers, getUsersSuccess )