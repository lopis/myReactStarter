import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

let store = null

module.exports = (reducer, initialState, isServer) => {
  if (isServer && typeof window === 'undefined') {

    return createStore(reducer, initialState, applyMiddleware(thunk))

  } else {
    if (!store) {
      store = createStore(reducer, initialState, applyMiddleware(thunk))
    }

    return store
  }
}
