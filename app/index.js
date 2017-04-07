import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers/reducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import App from './containers/App.jsx'


const store = createStore(
  reducer,
  compose(applyMiddleware(thunk, logger))
)

console.log(document.getElementById('root'));
render(
  <Provider store={store}>
    <App />
  </ Provider>,
  document.getElementById('root')
);
