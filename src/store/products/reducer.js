import * as constants from './constants'

const initialState = {
  error: false,
  loading: false,
  products: [],
}

export default (state = initialState, { type, payload, }) => {
  switch (type) {
    case constants.GET_ALL_PRODUCTS_REQUEST:
      return {
        ...state,
        error: false,
        loading: true,
      }
    case constants.GET_ALL_PRODUCTS_SUCCESS:
      return {
        error: false,
        loading: false,
        products: payload,
      }
    case constants.GET_ALL_PRODUCTS_FAILED:
      return {
        ...state,
        error: true,
        loading: false,
      }
    case constants.GET_PRODUCT_REQUEST:
      return {
        ...state,
        error: false,
        loading: true,
      }
    case constants.GET_PRODUCT_SUCCESS:
      return {
        error: false,
        loading: false,
        products: [ ...state.products, payload, ],
      }
    case constants.GET_PRODUCT_FAILED:
      return {
        ...state,
        error: true,
        loading: false,
      }
    case constants.CREATE_PRODUCT_REQUEST:
      return {
        ...state,
        error: false,
        loading: true,
      }
    case constants.CREATE_PRODUCT_SUCCESS:
      return {
        error: false,
        loading: false,
        products: [ ...state.products, payload, ],
      }
    case constants.CREATE_PRODUCT_FAILED:
      return {
        ...state,
        error: true,
        loading: false,
      }
    case constants.UPDATE_PRODUCT_REQUEST:
      return {
        ...state,
        error: false,
        loading: true,
      }
    case constants.UPDATE_PRODUCT_SUCCESS:
      return {
        error: false,
        loading: false,
        products: [ ...state.products.filter(product => product.id !== payload.id), payload, ],
      }
    case constants.UPDATE_PRODUCT_FAILED:
      return {
        ...state,
        error: true,
        loading: false,
      }
    case constants.DELETE_PRODUCT_REQUEST:
      return {
        ...state,
        error: false,
        loading: true,
      }
    case constants.DELETE_PRODUCT_SUCCESS:
      return {
        error: false,
        loading: false,
        products: state.products.filter(product => product.id !== payload.id),
      }
    case constants.DELETE_PRODUCT_FAILED:
      return {
        ...state,
        error: true,
        loading: false,
      }
    default:
      return { ...state, }
  }
}
