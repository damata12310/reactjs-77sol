import { combineReducers } from 'redux'

import authReducer from './auth.reducer'
import loadingReducer from './loading.reducer'
import buscaCep from './buscaCep.reducer'

const rootReducer = combineReducers({
  authReducer,
  buscaCep,
  loadingReducer
})

export default rootReducer
