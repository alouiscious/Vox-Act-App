const LOGINURL = "http://localhost:3000/login"

export const LOADING_USER = 'LOADING_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_ERROR = 'LOGIN_ERROR'


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
        dispatch({ type: 'LOGIN_USER', user: userJSON })
        // dispatch({ type: 'GET_USER', user: user })
      }
    })
    .catch(console.log)  
  }
}