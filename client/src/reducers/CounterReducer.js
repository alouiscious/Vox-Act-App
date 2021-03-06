import * as counterActions from "../actions/counterActions";

export const initialState = {
  count: 0
};

export default function counterReducer(state = initialState, action){
  switch (action.type) {
      case counterActions.INCREASE_VOTE:
        return {count: state.count + 1}
      case counterActions.DECREASE_VOTE:
        return {count: state.count - 1}
      default:
      return state;
    }
  }

