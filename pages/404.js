import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import App from '../app/containers/App'
import reducer from '../app/reducers/reducer'

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk, logger))
)

export default class Page404 extends Component {
  render () {
    return (
      <Provider store={store}>
        <App>
          Oops, page not found.
        </App>
      </ Provider>
    )
  }
}
