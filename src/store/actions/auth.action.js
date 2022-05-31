import { Http } from '../../config/globalConfig'
import { changeLoading } from './loading.action'

export const actionTypes = {
  GET_TOKEN: 'GET_TOKEN',
  LOGOUT: 'LOGOUT',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  CHANGE: 'CHANGE'
}

export const getToken = token => ({
  type: actionTypes.GET_TOKEN,
  token
})

export const removeToken = () => ({
  type: actionTypes.LOGOUT
})

export const loginSuccess = bool => ({
  type: actionTypes.SUCCESS,
  bool
})

export const loginError = error => ({
  type: actionTypes.ERROR,
  error
})

export const changeValue = payload => ({
  type: actionTypes.CHANGE,
  payload
})

export const loading = (bool, msg = null) => ({
  type: actionTypes.LOADING,
  isLoading: {
    active: bool,
    msg: msg
  }
})

export const getUserToken = () => dispatch =>
  localStorage.getItem('access_token').then(res => {
    dispatch(loading(false))
    if (typeof res !== 'undefined') {
      dispatch(getToken(res))
    }
  })

export const setUserToken = token => dispatch => {
  localStorage.setItem('access_token', token)
  dispatch(loading(false))
  dispatch(loginSuccess(true))
}

export const login = credentials => {
  return dispatch => {
    dispatch(
      changeLoading({
        open: true,
        msg: 'Autenticando'
      })
    )
    return Http.post('http://localhost:8000/api/login', {
      Authorization: 'bearer idsjosdihfoasdifhsdfhdsifhjwsdfph',
      email: credentials.email,
      password: credentials.password
    }).then(res => {
      dispatch(loading(false))
      console.log(res.data)
      if (typeof res !== 'undefined') {
        dispatch(setUserToken(res.data.access_token))
      }
    })
  }
}
