export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const loginLoader = () => ({
  type: LOGIN_USER,
});
export const loginSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
});

export function loginUser(user) {
  console.table("first userObj when login is called", user);
  return async (dispatch) => {
    const configLogin = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        user: user,
      }),
    };
    return fetch(`http://localhost:3000/login`, configLogin)
      .then((resp) => resp.json())
      .then((loginJSON) => {
        console.table("login promise", loginJSON);
        if (loginJSON.error) {
          dispatch(loginActionFailure());
          return <p></p>// if (window.confirm("Sorry. Not a Vox Act client? Sign up...")) {
          //   window.open("localhost:3001/userInput", "sign up now?");
          // }
        } else {
          localStorage.setItem("token", loginJSON.token);
          console.table("userObj when login is called", loginJSON.user);
          return dispatch(loginSuccess(loginJSON.user));
          // dispatch(fetchClient(loginJSON.user.id))
        }
      })
      .catch(console.log);
  };
}




export const LOADING_USER = "LOADING_USER";
export const GET_USER = "GET_USER";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "USER_ACTION_FAILURE";

export const getUser = () => ({
  type: GET_USER,
});
export const getUserSuccess = (user) => ({
  type: GET_USER_SUCCESS,
  payload: user,
});
export const userActionFailure = () => ({ type: GET_USER_FAILURE });

// Get User Details
export function fetchClient(id) {
  const configUser = {
    method: "GET",
    headers: {
      "Content-Type": "appliction/json",
      "Accept": "application/json",
    },
    credentials: "include",
  };

  return async (dispatch) => {
    dispatch(getUser());
    try {
      const resp = await fetch(`http://localhost:3000/users/${id}`, configUser);
      const clientJSON = await resp.json();
      if (resp.ok) {
        localStorage.setItem("token", clientJSON.token);
        dispatch(getUserSuccess(clientJSON));
      }
    } catch (error) {
      console.error(
        dispatch(userActionFailure()),
        window.confirm(
          "Vox Act client creation not complete. - Please try again."
        ),
        window.open("localhost:3001/users", "sign up now?")
      );
    }
  };
}

export const ADD_USER_PHOTO = "ADD_USER_PHOTO";
export const ADD_USER_PHOTO_SUCCESS = "ADD_USER_PHOTO_SUCCESS";
export const ADD_USER_PHOTO_FAILURE = "ADD_USER_PHOTO_FAILURE";
export const LOADING_USER_PHOTO = "LOADING_USER_PHOTO";

export const addUserPhoto = () => ({ 
  type: ADD_USER_PHOTO 
});
export const userPhotoSuccess = (upph) => ({
  type: ADD_USER_PHOTO_SUCCESS,
  payload: upph,
});
export const userPhotoActionFailure = () => ({
  type: ADD_USER_PHOTO_FAILURE,
});
export const loadingUserPhoto = () => ({ 
  type: LOADING_USER_PHOTO 
});


export function addNewPhoto(upph) {
  return async (dispatch) => {
    const configUpph = {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        upph: upph,
      }),
    };

    // const renderAddUserPhoto = ({ user, photo }) => {
    //   console.table("user from userEdit(06)", user)
    //   return <UserAddDetails key={user.id} photo={photo} />;
    // };
    console.table("addUserPhoto from userAction", upph);
    dispatch(loadingUserPhoto());
    return fetch(`http://localhost:3000/users`, configUpph)
      .then((resp) => resp.json())
      .then((photoJSON) => {
        // if (clientJSON.error) {
        //   alert("Vox Act client creation not complete. - Please try again.")
        // }
        // else {
        dispatch(addUserPhoto());
        dispatch(userPhotoSuccess(photoJSON.upph));
        // }
      })
      .catch(console.error(dispatch(userPhotoActionFailure()), console.log));
  };
}

export const loginActionFailure = () => ({ type: LOGIN_ERROR });

export const LOGOUT = "LOGOUT";
export const logout = () => ({ type: LOGOUT });

localStorage.removeItem("token");

export function logoutUser() {
  return async (dispatch) => {
    const configDeleteUser = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      credentials: "include",
    };
    return fetch(`http://localhost:3000/users/token_auth`, configDeleteUser)
      .then((resp) => resp.json())
      .then((logoutJSON) => {
        dispatch(logout(logoutJSON));
        // this.user({})
        alert("Logged Out");
      });
  };
}

export const GET_CURRENT_USER = "GET_CURRENT_USER";
export const GET_CURRENT_USER_SUCCESS = "GET_CURRENT_USER_SUCCESS";
export const GET_CURRENT_USER_FAILURE = "GET_CURRENT_USER_FAILURE";

export const getCurrentUser = () => ({
  type: GET_CURRENT_USER
});
export const getCurrentUserSuccess = (current_user) => ({
  type: GET_CURRENT_USER_SUCCESS,
  payload: current_user,
})
export const getCurrentUserFailure = () => ({
  type: GET_CURRENT_USER_FAILURE
})


export function currentUser() {
  const configCurrentUser = {
    method: "GET",
    headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    },
    credentials: "include",
  }
  return async (dispatch, getState) => {
    if (getState().userReducer.user) {
      return
    }
    dispatch(getCurrentUser())
    try {
      const resp = await fetch(`http://localhost:3000/get_current_user/`, configCurrentUser)
      const currentUserJSON = await resp.json()
      dispatch(getCurrentUserSuccess(currentUserJSON));
      console.log(currentUserJSON);
    }
    catch(error) {
      dispatch(getCurrentUserFailure())
    }
  }
}

export default (loginUser, currentUser, addNewPhoto);
