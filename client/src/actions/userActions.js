// // import { addUser, getUsers } from "./usersActions"

// const USERURL = `http://localhost:3000/users`

// export const LOADING_USER = 'LOADING_USER'
// export const GET_USER = 'GET_USER'
// export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
// export const GET_USER_FAILURE = 'USER_ACTION_FAILURE'

// export const getUser = () => ({ type: GET_USER })
// export const getUserSuccess = user => ({
//   type: GET_USER_SUCCESS,
//   payload: user,
// })

// export const userActionFailure = () => ({ type: GET_USER_FAILURE })

// // Get userlist
// export function fetchUser(id) {
//   return async dispatch => {
//     dispatch(getUser(id))

//     try {
//       const resp = await 
//       fetch(
//         `https://localhost:3000/users/${id}`
//       )
//       const userJSON = await resp.json()
//       dispatch(getUserSuccess(userJSON))
//       // (console.log('getUser from actions', userJSON))
//     } 
//     catch (error) {  
//       dispatch(userActionFailure())
//       alert('No User available')
//     }
//   }
// }

// export const ADD_USER_PHOTO = 'ADD_USER_PHOTO'
// export const addUserPhoto = (userPhoto) => {
  
//   return async (dispatch) => {
//     const configUser = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       credentials: 'include',
//       body: JSON.stringify({
//         userPhoto: userPhoto
//       })
//     }
//     // console.log('addUser from addUser (16)', userPhoto)
    
//    dispatch({type: 'LOADING_USERS'})

//     return fetch(USERURL, configUser)
//     .then(resp => resp.json())
//     .then(userJSON => {
//       dispatch({ type: 'ADD_USER', user: userJSON})
//       if (userJSON.error) {
//         alert("Vox Act user creation not complete. - Please try again.")
//       } 
//     })
//     .catch(console.log) 
//   }
// }

// export default ( fetchUser, addUserPhoto, getUser, getUserSuccess )