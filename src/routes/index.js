import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Dragon from '../pages/Dragon';
import FormEdit from '../pages/FormEdit';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/register" component={SignUp} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/dragon/:id" component={Dragon} isPrivate />
    <Route path="/formedit/" component={FormEdit} isPrivate />
    <Route path="/formedit/:id" component={FormEdit} isPrivate />

    <Route path="/" component={() => <h1>404</h1>} />
  </Switch>
);

export default Routes;
