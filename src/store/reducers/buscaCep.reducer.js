import { actionTypes } from '../actions/buscaCep.action'
import initialState from './initialState'

const buscaCep = (state = initialState.buscaCep, action) => {
  switch (action.type) {
    case actionTypes.CHANGE:
      return {
        ...state,
        credentials: {
          ...state.credentials,
          ...action.payload
        }
      }
    case actionTypes.GET_TOKEN:
      return {
        ...state,
        ...action.token
      }

    case actionTypes.SUCCESS:
      return {
        ...state,
        success: action
      }

    default:
      return state
  }
}

export default buscaCep
