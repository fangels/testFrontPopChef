import { GET_TOKEN_FAILED, GET_TOKEN_REQUEST, GET_TOKEN_SUCCESS, } from './constants'

const initialState = {
  error: false,
  loading: false,
  token: localStorage.getItem('token'),
}

export default (state = initialState, { type, payload, }) => {
  switch (type) {
    case GET_TOKEN_SUCCESS:
      localStorage.setItem('token', payload)

      return {
        error: false,
        loading: false,
        token: payload,
      }
    case GET_TOKEN_REQUEST:
      return {
        ...state,
        error: false,
        loading: true,
      }
    case GET_TOKEN_FAILED:
      return {
        ...state,
        error: true,
        loading: false,
      }
    default:
      return { ...state, }
  }
}
