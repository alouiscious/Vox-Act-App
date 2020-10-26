import * as talentActions from "../actions/talentActions";

export const initialState = {
  loading: false,
  hasErrors: false,
  talents: []
}

export default function talentsReducer(state = initialState, action) {
  let idx

  switch (action.type) {
    case talentActions.LOADING_TALENTS:
      const talent = {
        talent_style: action.talent_style,
        user_name:  action.user_name,
        upid:  action.upid,
        title: action.title,
        description:  action.description,
        phmf:  action.phmf,
        vimf:  action.vimf,
        aumf:  action.aumf,
      }
      return [...state, talent, {loading: true}]
      
    case talentActions.ADD_TALENT:
      return [ ...state, talent]

    case talentActions.GET_TALENTS:
      return { ...state, loading: true }

    case talentActions.GET_TALENTS_SUCCESS:
      return { ...state, talents: action.payload, loading: false}

    case talentActions.GET_TALENTS_FAILURE:
      return { ...state, loading: false, hasErrors: true } 

    case talentActions.DELETE_TALENT:
      idx = state.talents.findIndex(talent => talent.id === action.id)
      return [
        ...state.talents.slice(0, idx), 
        ...state.talents.slice(idx + 1)
      ]

    default:
      return state
  }
}


