

const user = {...this.state.loginForm}
export const loginUser = (user) => {

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
    fetch("http://localhost:3000/login", configUser)
    .then(resp => resp.json())
    .then(userJSON => {
      if (userJSON.error) {
        alert("invalid credentials")
      } 
      else {
          dispatch({ type: 'LOGIN_USER', user: userJSON})
        this.setState({
          currentUser: userJSON.user
          (console.log('User fetch wa ha ', userJSON))
        })
      }
    })
    .catch(console.log)  
  }
}