import { createStore as createReduxStore, applyMiddleware, compose, combineReducers, } from 'redux'
import createSagaMiddleware from 'redux-saga'

import globalReducer from './global/reducer'
import productsReducer from './products/reducer'
import globalWatcher from './global/saga'
import productsWatcher from './products/saga'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()

const createStore = () => {
  const middlewares = [ sagaMiddleware, ]

  const appReducer = combineReducers({
    global: globalReducer,
    products: productsReducer,
  })

  const rootReducer = (state, action) => {
    return appReducer(state, action)
  }

  const redux = createReduxStore(
    rootReducer,
    composeEnhancer(applyMiddleware(...middlewares)),
  )

  sagaMiddleware.run(globalWatcher)
  sagaMiddleware.run(productsWatcher)

  return redux
}

export const store = createStore()
