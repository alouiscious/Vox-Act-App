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

// export const [talentId, setTalentId, talentUserId, setTalentUserId] = useState(0)

class Counter extends Component {
  // export const onChangeVoteCount = (e) => {
  // console.log("voteid", e.target.value)
  // setTalentid(e.target.value ? Number(e.target.value) : 0)

  state = {
    count: 0,
    votes: [],
    talentId: undefined,
    talentUserId: undefined
  };
  // componentDidMount(){
  //   this.setCurrentRanks()
  // }

  // add
  //   this.setState({
  //   votes: this.state.concat(talent.id + talent)
  // })

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



  handleAddVoteClick = (count) => {
    this.props.dispatch(addTalentVote(count))
  }
  handleSubVoteClick = (count) => {
    this.props.dispatch(subTalentVote(count))
  }


  render() {

    return <div className="Vote">
      <button onClick={this.handleAddVoteClick} className="addTalentVote">
        {this.props.count} UpVotes!
      </button>
      <br />
      <button onClick={this.handleSubVoteClick} className="subTalentVote">
        {this.props.count} DnVotes!
      </button>
    </div>

  }


}

const mapStateToProps = ({ counterReducer }) => ({
  count: counterReducer.count,

});

// function mapDispatchToProps(dispatch) {
//   return { 
//     votes: () => dispatch(addVote()),
//     votes: () => dispatch(subVote()),
//   }
// }

export default connect(mapStateToProps)(Counter)
// export default connect(state => ({count: state.count}), mapStateToProps)(Counter)

