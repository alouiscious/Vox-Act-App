
// const USERURL = `https://localhost:3000/users/${id}`

export const LOADING_USER = 'LOADING_USER'
export const GET_USER = 'GET_USER'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAILURE = 'USER_ACTION_FAILURE'

export const getUser = () => ({ type: GET_USER })
export const getUserSuccess = user => ({
  type: GET_USER_SUCCESS,
  payload: user,
})

export const userActionFailure = () => ({ type: GET_USER_FAILURE })

// Get Client List
export function fetchClient(id) {
  return async (dispatch) => {
    dispatch({type: 'LOADING_USER'})
    dispatch(getUser(id))

    try {
      const resp = await 
      fetch(`https://localhost:3000/users/${id}`)
      const userJSON = await resp.json()
      dispatch(getUserSuccess(userJSON))
      (console.table('getUser from actions', userJSON))
    } 
    catch (error) {  
      dispatch(userActionFailure())
      alert('No User available')
    }
  }
}

export const ADD_USER_PHOTO = 'ADD_USER_PHOTO'

export const addUserPhoto = (userPhoto, id) => {
  return async (dispatch) => {
    const configUpph = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      credentials: 'include',
      body: JSON.stringify({
        userPhoto: userPhoto
      })
    }
    console.log('addUser from addUser (53)', userPhoto)
    dispatch({type: 'LOADING_USER'})
    return fetch(`https://localhost:3000/users/${id}`, configUpph)
    .then(resp => resp.json())
    .then(userJSON => {
      if (userJSON.error) {
        alert("Vox Act user creation not complete. - Please try again.")
      } 
      else {
        dispatch({ type: 'ADD_USER_PHOTO', user: userJSON.upph})
      }
    })
    .catch(console.log) 
  }
}

export default ( fetchClient, addUserPhoto )