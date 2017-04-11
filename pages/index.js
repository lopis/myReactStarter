import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { I18nextProvider } from 'react-i18next'

import App from '../app/containers/App'
import reducer from '../app/reducers/reducer'
import initStore from '../app/reducers/store'
import startI18n from '../app/i18n/i18n'

export default class PageHome extends Component {
  static async getInitialProps ({ req }) {
    const isServer = !!req
    const store = initStore(reducer, null, isServer)
    const translations = {}
    const i18n = startI18n(translations, isServer)

    store.dispatch({ type: 'INITIAL', hello: 'https://media.giphy.com/media/pK4av7uBK3I4M/giphy.gif' })

    return { initialState: store.getState(), isServer, translations }
  }

  constructor(props) {
    super(props)

    this.i18n = startI18n(props.translations)
    this.store = initStore(reducer, props.initialState, props.isServer)
  }

  render () {
    return (
      <I18nextProvider i18n={this.i18n}>
        <Provider store={this.store}>
          <App>
            Hello World. This is the index page.
          </App>
        </ Provider>
      </I18nextProvider>
    )
  }
}
