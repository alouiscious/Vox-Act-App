
export const INCREASE_VOTE = "INCREASE_VOTE"
export const addVote = (count) => ({
  type: INCREASE_VOTE,
  payload: count,
})

//INCREMENT_VOTE
export const addTalentVote = (count) => {
  return (dispatch) => {
    dispatch(addVote(count));
  }
}

export const DECREASE_VOTE = "DECREASE_VOTE"
export const subVote = (count) => ({
  type: DECREASE_VOTE,
  payload: count
})
export const subTalentVote = (count) => {
  return (dispatch) => {
    dispatch(subVote(count));
  }
}

export default (addTalentVote, subTalentVote)
