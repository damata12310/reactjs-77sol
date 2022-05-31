import { Http } from '../../config/globalConfig'

export const actionTypes = {
  GET_TOKEN: 'GET_TOKEN',
  CHANGE: 'CHANGE'
}

export const getToken = token => ({
  type: actionTypes.GET_TOKEN,
  token
})

export const changeValue = payload => ({
  type: actionTypes.CHANGE,
  payload
})

export const getUserToken = () => dispatch =>
  localStorage.getItem('access_token').then(res => {
    if (typeof res !== 'undefined') {
      dispatch(getToken(res))
    }
  })

export const setUserToken = token => dispatch => {
  localStorage.setItem('access_token', token)
}

export const simulador = credentials => {
  return dispatch => {
    return Http.post(
      'http://localhost:8000/api/simulador',
      {
        cep: credentials.cep,
        valor_conta: credentials.valor_conta,
        tipo_telhado: credentials.tipo_telhado

        // cep: '08590510',
        // valor_conta: '200',
        // tipo_telhado: 'fibrocimento-metalico'
      },
      {
        headers: {
          Authorization: 'bearer ' + localStorage.getItem('access_token')
        }
      }
    ).then(res => {
      console.log(res.data.results[0])
      localStorage.setItem('estrutura', credentials.tipo_telhado)
      localStorage.setItem(
        'estado',
        res.data.results[0].address_components[3].short_name
      )
      localStorage.setItem(
        'cidade',
        res.data.results[0].address_components[2].long_name
      )
      localStorage.setItem('valor_conta', credentials.valor_conta)
      localStorage.setItem('cep', credentials.cep)
      localStorage.setItem(
        'latitude',
        res.data.results[0].geometry.location.lat
      )
      localStorage.setItem(
        'longitude',
        res.data.results[0].geometry.location.lng
      )

      // return Http.post(
      //   'http://localhost:8000/api/simulador-sol',
      //   {
      //     estrutura: localStorage.getItem('estrutura'),
      //     estado: localStorage.getItem('estado'),
      //     cidade: localStorage.getItem('cidade'),
      //     valor_conta: localStorage.getItem('valor_conta'),
      //     cep: localStorage.getItem('cep'),
      //     latitude: localStorage.getItem('latitude'),
      //     longitude: localStorage.getItem('longitude')
      //   },
      //   {
      //     headers: {
      //       Authorization: 'bearer ' + localStorage.getItem('access_token')
      //     }
      //   }
      // ).then(res => {
      //   console.log(res.data)
      //   console.log(res.data.irradiancia)
      // })
      if (typeof res !== 'undefined') {
        dispatch(setUserToken(localStorage.getItem('access_token')))
      }
    })
  }
}
