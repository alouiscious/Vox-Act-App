
export function addTalent(talent) {
  // const talent = ({...this.state.talentForm, id: uuid()})
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
    
    fetch("http://localhost:3000/talents", configTalent)
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


export function getTalents(talents) {
  return (dispatch) => {
    fetch("http://localhost:3000/talents")
    .then(resp => resp.json())
    .then(talentsJSON => {
      console.log('Talent from actions', talents)
      if (talentsJSON.error) {
        alert("Talent List did not collect. Talent 41")
      } 
      else {
        dispatch({ type: 'GET_TALENTS', talents: talentsJSON.talents})
      }
    })
   
    .catch(console.log)   
  }


}

export default {addTalent, getTalents}