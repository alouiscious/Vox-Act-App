
export const addUser = (user) => {
  console.log('addUser from userActions', user)
  
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
      
      // dispatch({ type: 'LOADING_USER'})
      fetch("http://localhost:3000/users", configUser)
      .then(resp => resp.json())
      .then(userJSON => {
        dispatch({ type: 'ADD_USER', user: userJSON})
        if (userJSON.error) {
          alert("Sorry. Not a Vox Act client? Sign up...")
        } 
        else {
  
        }
      })
      .catch(console.log)  
    }
  }


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
    fetch("http://localhost:3000/login", configLogin)
    .then(resp => resp.json())
    .then(userJSON => {
      if (userJSON.error) {
        alert("Sorry. Not a Vox Act client? Sign up...")
        dispatch({ type: 'LOGIN_ERROR', error: userJSON.error})

      } 
      else {
        dispatch({ type: 'LOGIN_USER', user: userJSON})
      }
    })
    .catch(console.log)  
  }
}





export default {addUser, loginUser}