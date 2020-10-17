const TALENTURL = "http://localhost:3000/talents"

export function addTalent(talent) {
  const talent = ({...this.state.talentInput, upid: upid})
  console.log('Talent from actions', talent)

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
    
    fetch(TALENTURL, configTalent)
    .then(resp => resp.json())
    .then(talentJSON => {
      if (talentJSON.error) {
        alert("Talent creation was not complete.")
      } 
      else {
        dispatch({ type: 'ADD_TALENT', talent: talentJSON})
        // dispatch({ type: 'DELETE_TALENT', talent: talentJSON})
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


export function getTalents(upid) {
  return async dispatch => {
    dispatch(fetchTalents())

    return fetch(TALENTURL)
    .then(resp => resp.json())
    .then(talentsJSON => {
      console.log('talentsJSON from actions', talentsJSON)
      if (talentsJSON.error) {
        dispatch(getTalentsFailure())
        alert("Talent List did not collect. Talent 41")
      } 
      else {
        dispatch(getTalentsSuccess(talentsJSON.talents))
      }
    })
    .catch(console.log)
  }
}

export function removeTalent() {
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

// export default {addTalent, getTalents, removeTalent}