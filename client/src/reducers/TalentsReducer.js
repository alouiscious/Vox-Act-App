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
        loading: false,
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

    case talentActions.DELETE_TALENT:
      idx = state.list.findIndex((talent) => talent.id === action.id);
      return [...state.talents.slice(0, idx), ...state.talents.slice(idx + 1)];

    default:
      return state;
  }
}
