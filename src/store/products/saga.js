import { call, put, takeLatest, } from 'redux-saga/effects'

import * as constants from './constants'

import {
  requestAllProducts,
  requestCreateProduct,
  requestDeleteProduct,
  requestProduct,
  requestUpdateProduct,
} from './actions'

export default function * globalWatcher () {
  yield takeLatest([ constants.GET_PRODUCT, ], getProductSaga)
  yield takeLatest([ constants.CREATE_PRODUCT, ], createProductSaga)
  yield takeLatest([ constants.UPDATE_PRODUCT, ], updateProductSaga)
  yield takeLatest([ constants.DELETE_PRODUCT, ], deleteProductSaga)
  return yield takeLatest([ constants.GET_ALL_PRODUCTS, ], getAllProductsSaga)
}

function * getAllProductsSaga ({ payload, }) {
  yield put({ type: constants.GET_ALL_PRODUCTS_REQUEST, })
  const data = yield call(requestAllProducts, payload)
  if (!data) {
    return yield put({
      type: constants.GET_ALL_PRODUCTS_FAILED,
      payload: {},
    })
  }
  return yield put({
    type: constants.GET_ALL_PRODUCTS_SUCCESS,
    payload: data,
  })
}

function * getProductSaga ({ payload, }) {
  yield put({ type: constants.GET_PRODUCT_REQUEST, })
  const data = yield call(requestProduct, payload)
  if (!data) {
    return yield put({
      type: constants.GET_PRODUCT_FAILED,
      payload: {},
    })
  }
  return yield put({
    type: constants.GET_PRODUCT_SUCCESS,
    payload: data,
  })
}

function * createProductSaga ({ payload, }) {
  yield put({ type: constants.CREATE_PRODUCT_REQUEST, })
  const data = yield call(requestCreateProduct, payload)
  if (!data) {
    return yield put({
      type: constants.CREATE_PRODUCT_FAILED,
      payload: {},
    })
  }
  return yield put({
    type: constants.CREATE_PRODUCT_SUCCESS,
    payload: data,
  })
}

function * updateProductSaga ({ payload, }) {
  yield put({ type: constants.UPDATE_PRODUCT_REQUEST, })
  const data = yield call(requestUpdateProduct, payload)
  if (!data) {
    return yield put({
      type: constants.UPDATE_PRODUCT_FAILED,
      payload: {},
    })
  }
  return yield put({
    type: constants.UPDATE_PRODUCT_SUCCESS,
    payload: data,
  })
}

function * deleteProductSaga ({ payload, }) {
  yield put({ type: constants.DELETE_PRODUCT_REQUEST, })
  const data = yield call(requestDeleteProduct, payload)
  if (!data) {
    return yield put({
      type: constants.DELETE_PRODUCT_FAILED,
      payload: {},
    })
  }
  return yield put({
    type: constants.DELETE_PRODUCT_SUCCESS,
    payload: payload,
  })
}
