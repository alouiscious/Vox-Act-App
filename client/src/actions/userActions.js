// import { fetchUsers } from '../actions/usersActions'

export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const loginLoader = () => ({ 
  type: LOGIN_USER,
})
export const loginSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
})

export function loginUser(user) {
  console.table('userObj when login is called', user)
  return async (dispatch) => {
    // dispatch(fetchClient(user.id))
    dispatch(loginLoader())

    const configLogin = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Credentials": "true",
        "Accept": "application/json",
        "Authenticate": localStorage.token,
      },
      credentials: 'include',
      body: JSON.stringify({
        user: user
      })
    }
    if(localStorage.getItem("token")) {
      return fetch(`http://localhost:3000/login`, configLogin)
      .then(resp => resp.json())
      .then(user => {
        this.user(user)
      })
      .then(loginJSON => {
        console.table('login promise', loginJSON)
        if (loginJSON.error) {
          dispatch(loginActionFailure()) 
          alert("Sorry. Not a Vox Act client? Sign up...")
          // dispatch({ type: 'LOGIN_ERROR', error: loginJSON.error})
        } 
        else {
          localStorage.setItem('jwt', user.auth_token)
          localStorage.setItem('token', loginJSON.token)
          this.user(loginJSON.user)
          // dispatch({ type: 'LOGIN_USER', user: loginJSON.user })
          return dispatch(loginSuccess(loginJSON))

        }
      })
      .catch(console.log) 
    } 
  }
}


export const LOADING_USER = 'LOADING_USER'
export const GET_USER = 'GET_USER'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAILURE = 'USER_ACTION_FAILURE'

export const getUser = () => ({ 
  type: GET_USER,
})
export const getUserSuccess = user => ({
  type: GET_USER_SUCCESS,
  payload: user,
})

export const userActionFailure = () => ({ type: GET_USER_FAILURE })

// Get Client Details
export function fetchClient(id) {
  const USERURL = `http://localhost:3000/users/${id}`
  return async (dispatch) => {
    dispatch(getUser())
  
    dispatch({type: 'LOADING_USER'})
    return fetch(USERURL)
    .then(resp => resp.json())
    .then(clientJSON => {
      dispatch(getUserSuccess(clientJSON))
      console.table('getUserSuc from actions', clientJSON)
    })
    .catch(
      console.error(
        dispatch(userActionFailure()),
        alert('No User available from userActions')

      )
    )
  }
}

export const ADD_USER_PHOTO = 'ADD_USER_PHOTO'
export const ADD_USER_PHOTO_SUCCESS = 'ADD_USER_PHOTO_SUCCESS'
export const ADD_USER_PHOTO_FAILURE = 'ADD_USER_PHOTO_FAILURE'
export const getUserPhoto = () => ({ type: ADD_USER_PHOTO })
export const addUserPhotoSuccess = (userPhoto) => ({
  type: ADD_USER_PHOTO_SUCCESS,
  payload: userPhoto,
})
export const userPhotoActionFailure = () => ({ type: ADD_USER_PHOTO_FAILURE })

export function addUserPhoto(userPhoto, id) {
  const USERURL = `http://localhost:3000/users/${id}`

  return async (dispatch) => {
    const configUpph = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      credentials: 'include',
      body: JSON.stringify({
        userPhoto: userPhoto,
      })
    }
    console.table('addUserPhoto from userAction', userPhoto)
    dispatch({type: 'LOADING_USER'})
    return fetch(USERURL, configUpph)
    .then(resp => resp.json())
    .then(clientJSON => {
      // if (clientJSON.error) {
      //   alert("Vox Act client creation not complete. - Please try again.")
      // } 
      // else {
        dispatch(fetchClient(clientJSON.user.id))
        dispatch(getUserPhoto())
        dispatch(addUserPhotoSuccess(clientJSON))
      // }
    })
    .catch(console.error(
      console.log,
      dispatch(userPhotoActionFailure())

    )) 
  }
}


export const loginActionFailure = () => ({ type: LOGIN_ERROR })

export const LOGOUT = 'LOGOUT'
export const logout = () =>  
  ({type: LOGOUT})

  localStorage.removeItem("token")


export function logoutUser() {
  return async (dispatch) => {
    const configDeleteUser = {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      credentials: 'include'
    }
    return fetch(`auth`, configDeleteUser)
    .then(resp => resp.json())
    .then(logoutJSON => {
      dispatch(logout(logoutJSON))
      this.user({})
      alert('Logged Out')
    })
  }
}



function currentUser() {
  return fetch(`http://localhost:3000/current_user`)
  ({ credentials: 'include' })
  .then(resp => resp.json())
  .then(currentUserJSON => {
    console.log(currentUserJSON)
  })
}

export default ( loginUser, currentUser, fetchClient, addUserPhoto )