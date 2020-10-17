import * as actions from "../actions/talentActions";

export const initialState = {
  loading: false,
  hasErrors: false,
  talents: []
}

export default function talentsReducer(state = initialState, action) {
  let idx

  switch (action.type) {
    case actions.GET_TALENTS:
      return { ...state, loading: true }
    case actions.GET_TALENTS_SUCCESS:
      return { ...state, talents: action.payload, loading: false}
    case actions.GET_TALENTS_FAILURE:
      return { ...state, laoding: false, hasErrors: true }
    case actions.ADD_TALENT:
      const talent = {
        talent_style: action.talent_style,
        user_name:  action.user_name,
        upid:  action.upid,
        title: action.title,
        description:  action.description,
        media_URL:  action.media_URL,
        phmf:  action.phmf,
        vimf:  action.vimf,
        aumf:  action.aumf,
      }
      return [ ...state, talent ]
  
    case actions.REMOVE_TALENT:
      idx = state.talents.findIndex(talent => talent.id === action.id)
      return [
        ...state.talents.slice(0, idx), 
        ...state.talents.slice(idx + 1)
      ]

  
    default:
      return state
  }
}


