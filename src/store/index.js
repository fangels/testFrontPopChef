import { createStore as createReduxStore, applyMiddleware, compose, combineReducers, } from 'redux'
import createSagaMiddleware from 'redux-saga'

import globalReducer from './global/reducer'
import globalWatcher from './global/saga'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()

const createStore = () => {
  const middlewares = [ sagaMiddleware, ]

  const appReducer = combineReducers({
    global: globalReducer,
  })

  const rootReducer = (state, action) => {
    return appReducer(state, action)
  }

  const redux = createReduxStore(
    rootReducer,
    composeEnhancer(applyMiddleware(...middlewares)),
  )

  sagaMiddleware.run(globalWatcher)

  return redux
}

export const store = createStore()
