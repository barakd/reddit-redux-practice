import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware, routerActions } from 'react-router-redux'

import reducer from './reducers'
import userMiddleWare from './middleware/user';
import App from './App';
import LoginContainer from './containers/LoginContainer';
import CreateLinkContainer from './containers/CreateLinkContainer';
import fontAwesome from 'font-awesome/css/font-awesome.css';
const routingMiddleware = routerMiddleware(browserHistory)
const middleware = [ userMiddleWare, thunk, routingMiddleware ];
const store = createStore(
  combineReducers(
  {
    ...reducer,
    routing: routerReducer,
  }),
  applyMiddleware(...middleware)
);

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <App history={history}/>
  </Provider>,
  document.getElementById('root')
)
