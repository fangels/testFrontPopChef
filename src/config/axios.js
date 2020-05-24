import axios from 'axios'

import config from './index'
import { store, } from '../store'

const initInterceptorRequest = (client) => {
  client.interceptors.request.use((requestConfig) => {
    const token = store.getState(global).token
    if (token) requestConfig.headers.authorization = 'Bearer ' + token
    return requestConfig
  })
  client.interceptors.response.use(null, (error) => {
    return Promise.reject(error)
  })

  return client
}

const httpClient = initInterceptorRequest(axios.create({ baseURL: config.apiUrl, timeout: 5000, }))

export default httpClient
