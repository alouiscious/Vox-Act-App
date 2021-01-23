
const TALENTURL = "http://localhost:3000/talents";

export const ADD_TALENT = "ADD_TALENT";
export const ADD_TALENT_SUCCESS = "ADD_TALENT_SUCCESS";
export const ADD_TALENT_FAILURE = "ADD_TALENT_FAILURE";
export const LOADING_TALENTS = "LOADING_TALENTS";

export const addTalent = () => ({ type: ADD_TALENT });
export const addTalentSuccess = (talent) => ({
  type: ADD_TALENT,
  payload: talent,
});
export const addTalentFailure = () => ({ type: ADD_TALENT_FAILURE });
export const loadingTalents = () => ({ type: LOADING_TALENTS });

export const addNewTalent = (talent) => {
  return async (dispatch) => {
    const configTalent = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        talent: talent,
      })
    };

    dispatch(loadingTalents());
    return fetch(TALENTURL, configTalent)
      .then(resp => resp.json())
      .then(talentJSON => {
        dispatch(addTalent());
        dispatch(addTalentSuccess(talentJSON.id));
        if (talentJSON.error) {
          alert("Talent creation was not complete.");
        }
        return talentJSON.id
      })
      
      .catch(console.error(dispatch(addTalentFailure()), console.table));
  };
};

export const GET_TALENTS = "GET TALENTS";
export const GET_TALENTS_SUCCESS = "GET_TALENTS_SUCCESS";
export const GET_TALENTS_FAILURE = "GET_TALENTS_FAILURE";
export const getTalents = () => ({ type: GET_TALENTS });
export const getTalentsSuccess = list => ({
  type: GET_TALENTS_SUCCESS,
  payload: list,
});
export const getTalentsFailure = () => ({ type: GET_TALENTS_FAILURE });

//Get Talents List
export function fetchTalents() {
  const configTalents = {
    method: "GET",
    headers: {
      "Content-Type": "appliction/json",
      "Accept": "application/json"
    },
    credentials: "include"
  }
  return async (dispatch) => {
    dispatch(getTalents())
    try {
      const resp = await 
      fetch(TALENTURL, configTalents)
      const talentsJSON = await resp.json()
      dispatch(getTalentsSuccess(talentsJSON))
      console.table('getTalentsSuc talentsJSON', talentsJSON)
    }
    catch (error) {
      dispatch(getTalentsFailure())
      console.table('No Talents from fetchTalents talentsJSON')
    }
  }
}

export const GET_TALENT = 'GET_TALENT'
export const GET_TALENT_SUCCESS = 'GET_TALENT_SUCCESS'
export const GET_TALENT_FAILURE = 'TALENT_ACTION_FAILURE'

export const getTalent = () => ({ 
  type: GET_TALENT,
})
export const getTalentSuccess = talent => ({
  type: GET_TALENT_SUCCESS,
  payload: talent,
})
export const getTalentFailure = () => ({ type: GET_TALENT_FAILURE })

//Get User Talents
export function fetchTalent(userID) {
    const configTalent = {
      method: "GET",
      headers: {
        "Content-Type": "appliction/json",
        "Accept": "application/json"
      },
      credentials: "include"
    }
    
  return async dispatch => {
    dispatch(getTalent())
    try {
      const resp = await fetch(TALENTURL + `/${userID}`, configTalent)
      const talentJSON = await resp.json()
      if (resp.ok) {
        dispatch(getTalentSuccess(talentJSON));
        // dispatch(getTalentSuccess(talentJSON.user_id));
        console.table("talentsJSON from actions", talentJSON);
      }
      else {
        alert("You're not logged in")
        dispatch(getTalentFailure());
      }
    }
    catch(error) {
      dispatch(getTalentFailure());
      alert("No Talent fetched. getTalentActions");
    }
  }
}


export const DELETE_TALENT = "DELETE_TALENT";
// export const deleteTalent = () => ({ type: DELETE_TALENT })

export function deleteTalent(talent) {
  return (dispatch) => {
    const configTalent = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        talent: talent,
      }),
    };

    fetch(TALENTURL, configTalent)
      .then((resp) => resp.json())
      .then((talentJSON) => {
        if (talentJSON.error) {
          alert("Talent deletion was not complete.");
        } else {
          dispatch({ type: "DELETE_TALENT", talent: talentJSON });
          alert("Talent Removed.");
        }
      })
      .catch(console.log);
  };
}

export default (addNewTalent, fetchTalent, deleteTalent);
