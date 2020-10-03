
export const loginUser = (user) => {
  // const user = { ...this.state.loginForm}

  return (dispatch) => {
    
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
    dispatch({ type: 'LOADING_USER'})
    fetch("http://localhost:3000/login", configUser)
    .then(resp => resp.json())
    .then(userJSON => {
      if (userJSON.error) {
        alert("Sorry. Not a Vox Act client? Sign up...")
      } 
      else {
        dispatch({ type: 'LOGIN_USER', user: userJSON})
        this.props.loginUser(user)
        this.setState({
          currentUser: userJSON.user,
        })
      }
    })
    .catch(console.log)  
  }
}

export default loginUser