const TALENTURL = "http://localhost:3000/talents"

export const ADD_TALENT = 'ADD_TALENT'
export const ADD_TALENT_SUCCESS = 'ADD_TALENT_SUCCESS'
export const ADD_TALENT_FAILURE = 'ADD_TALENT_FAILURE'
export const LOADING_TALENTS = 'LOADING_TALENTS'

export const addTalent = () => ({ type: ADD_TALENT })
export const addTalentSuccess = (talent) => ({ 
  type: ADD_TALENT, 
  payload: talent,
})
export const addTalentFailure = () => ({ type: ADD_TALENT_FAILURE })

export const addNewTalent = (talent, user) => {
  return (dispatch) => {
    const configTalent = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({
        talent: talent,
        user: user
      })
    }
    dispatch({ type: 'LOADING_TALENT'})
    return fetch((TALENTURL), configTalent)
    .then(resp => resp.json())
    .then(talentJSON => {
      dispatch(addTalent())
      dispatch(addTalentSuccess(talentJSON))
      if (talentJSON.error) {
        alert("Talent creation was not complete.")
      } 
    })
    .catch(console.error(
      dispatch(addTalentFailure()),
      console.table
    ))   
  }
}

export const GET_TALENTS = 'GET TALENTS'
export const GET_TALENTS_SUCCESS = 'GET_TALENTS_SUCCESS'
export const GET_TALENTS_FAILURE = 'GET_TALENTS_FAILURE'

export const getTalents = () => ({ type: GET_TALENTS })
export const getTalentsSuccess = talents => ({
  type: GET_TALENTS_SUCCESS,
  payload: talents,
})
export const getTalentsFailure = () => ({ type: GET_TALENTS_FAILURE })


export const fetchTalents = (userId) => {
  return async dispatch => {
    dispatch(getTalents())
    return fetch(TALENTURL+`?/userId=${userId}`)
    .then(resp => resp.json())
    .then(talentsJSON => {
      console.table('talentsJSON from actions', talentsJSON)
      if (talentsJSON.error) {
        dispatch(getTalentsFailure())
        alert("Talent List did not collect. getTalentActions")
      } 
      else {
        dispatch(getTalentsSuccess(talentsJSON))
      }
    })
    .catch(console.table)
  }
}


export const DELETE_TALENT = 'DELETE_TALENT'
// export const deleteTalent = () => ({ type: DELETE_TALENT })

export function deleteTalent(talent) {
  return (dispatch) => {

    const configTalent = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({
        talent: talent
      })
    }
    
    fetch(TALENTURL, configTalent)
    .then(resp => resp.json())
    .then(talentJSON => {
      if (talentJSON.error) {
        alert("Talent deletion was not complete.")
      } 
      else {
        dispatch({ type: 'DELETE_TALENT', talent: talentJSON})
        alert("Talent Removed.")
      }
    })
    .catch(console.log)   
  }
}

export default (addNewTalent, fetchTalents, deleteTalent)