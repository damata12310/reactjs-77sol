import Axios from 'axios'

export const rootUrl = 'http://localhost:8000/'
export const rootUrlReact = 'http://localhost:3000/'

export const Http = Axios.create({
  baseUrl: rootUrl
})
