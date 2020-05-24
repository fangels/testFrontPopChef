import { call, put, takeLatest, } from 'redux-saga/effects'

import {
  GET_TOKEN_REQUEST,
  GET_TOKEN_FAILED,
  GET_TOKEN, GET_TOKEN_SUCCESS,
} from './constants'

import { requestToken, } from './actions'

export default function * globalWatcher () {
  return yield takeLatest([ GET_TOKEN, ], getTokenSaga)
}

function * getTokenSaga ({ payload, }) {
  yield put({ type: GET_TOKEN_REQUEST, })
  const data = yield call(requestToken, payload)
  if (!data) {
    return yield put({
      type: GET_TOKEN_FAILED,
      payload: {},
    })
  }
  return yield put({
    type: GET_TOKEN_SUCCESS,
    payload: data,
  })
}
