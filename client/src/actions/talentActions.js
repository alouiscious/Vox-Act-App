const TALENTURL = "http://localhost:3000/talents"

export const ADD_TALENT = 'ADD_TALENT'
export const ADD_TALENT_SUCCESS = 'ADD_TALENT_SUCCESS'
export const ADD_TALENT_FAILURE = 'ADD_TALENT_FAILURE'
export const LOADING_TALENTS = 'LOADING_TALENTS'

// export const addTalent = () => ({ type: ADD_TALENT })

export const addTalent = (talent) => {
  return (dispatch) => {
    const configTalent = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        talent: talent
      })
    }
    dispatch({ type: 'LOADING_TALENT'})
    return fetch((TALENTURL), configTalent)
    .then(resp => resp.json())
    .then(talentJSON => {
      dispatch({ type: 'ADD_TALENT', talent: talentJSON})
      if (talentJSON.error) {
        alert("Talent creation was not complete.")
      } 
    })
    .catch(console.log)   
  }
}

export const GET_TALENTS = 'GET TALENTS'
export const GET_TALENTS_SUCCESS = 'GET_TALENTS_SUCCESS'
export const GET_TALENTS_FAILURE = 'GET_TALENTS_FAILURE'

export const fetchTalents = () => ({ type: GET_TALENTS })
export const getTalentsFailure = () => ({ type: GET_TALENTS_FAILURE })

export const getTalentsSuccess = talents => ({
  type: GET_TALENTS_SUCCESS,
  payload: talents,
})


export const getTalents = () => {
  return async dispatch => {
    dispatch(fetchTalents())

    return fetch(TALENTURL)
    .then(resp => resp.json())
    .then(talentsJSON => {
      console.log('talentsJSON from actions', talentsJSON)
      if (talentsJSON.error) {
        dispatch(getTalentsFailure())
        alert("Talent List did not collect. getTalentActions")
      } 
      else {
        dispatch(getTalentsSuccess(talentsJSON.talents))
      }
    })
    .catch(console.log)
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

export default (addTalent, getTalents, deleteTalent)