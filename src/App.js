import React from 'react';
import { routerActions } from 'react-router-redux'
import { Route, Router } from 'react-router';
import { UserAuthWrapper } from 'redux-auth-wrapper'
import CreateLinkContainer from './containers/CreateLinkContainer';
import LinksContainer from './containers/LinksContainer';
import LoginContainer from './containers/LoginContainer';
const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.user,
  redirectAction: routerActions.replace,
});


export default function App({ history }) {
  return <Router history={history}>
          <Route path="/" component={UserIsAuthenticated(LinksContainer)} />
          <Route path="new" component={UserIsAuthenticated(CreateLinkContainer)}/>
          <Route path="login" component={LoginContainer}/>
      </Router>
}
