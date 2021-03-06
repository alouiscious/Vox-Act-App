import * as talentActions from "../actions/talentActions";
// import * as userActions from "../actions/userActions"

export const initialState = {
  list: [],
  user: [],
  loading: false,
  hasErrors: false,
};

let idx;
export default function talentsReducer(state = initialState, action) {
  switch (action.type) {

    case talentActions.LOADING_TALENTS:
      return { ...state, loading: true };
    case talentActions.GET_TALENTS:
      return { ...state, loading: true };
    case talentActions.GET_TALENTS_SUCCESS:
      return { list: action.payload, loading: false, hasErrors: false };
    case talentActions.GET_TALENTS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    case talentActions.ADD_TALENT:
      return {
        ...state,
        loading: true,
        user_name: action.user_name,
        upid: action.upid,
      };
    case talentActions.ADD_TALENT_SUCCESS:
      return {
        ...state,
        talent: state.talent,
        loading: false,
        hasErrors: false,
      };
    case talentActions.ADD_TALENT_FAILURE:
      return { ...state, loading: false, hasErrors: true };

    case talentActions.QUEUE_DELETE_TALENT:
      return {
        ...state,
        loading: true,
        user_name: action.user_name,
        upid: action.upid,
      };
    case talentActions.DELETE_TALENT_SUCCESS:
      idx = state.list.findIndex((talent) => talent.upid === action.upid);
      return [...state.talents.slice(0, idx), ...state.talents.slice(idx + 1)];
    case talentActions.DELETE_TALENT_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
