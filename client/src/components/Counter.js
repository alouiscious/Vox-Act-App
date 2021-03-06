import React, { Component } from 'react';
import { connect } from 'react-redux'

//INCREMENT_VOTE
export const INCREASE_VOTE = "INCREASE_VOTE"
export const addVote = (count) => ({
 type: INCREASE_VOTE,
 payload: count,
})
export const addTalentVote = (count) => {
  return (dispatch) => {
    dispatch(addVote(count));
  }
}

//DECREMENT_VOTE
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




class Counter extends Component {
  state = {
    count: 0,
    votes: []
  };
  
   counterReducer(state, action) {
    switch (action.type) {
      case INCREASE_VOTE:
        return {count: state.count + 1}
      case DECREASE_VOTE:
        return {count: state.count - 1}
      default:
        return state;
    }
  }

  handleVoteClick = (count) => {
    this.props.dispatch(addTalentVote(count))
  }
  render() {
    // const { votes, count } = this.state;

    return <div>
      <button onClick={this.handleVoteClick}>
        {this.props.count} Votes!
      </button>
    </div>

  }


}

const mapStateToProps = ({ counterReducer }) => ({
  count: counterReducer.count,

});

// export default Counter
export default connect(mapStateToProps)(Counter)
// export default connect(state => ({count: state.count}), mapStateToProps)(Counter)

