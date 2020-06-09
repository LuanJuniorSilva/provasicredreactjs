import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Dashboard from '../pages/Dashboard';

import SignIn from '../pages/SignIn';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />

    <Route path="/dashboard" component={Dashboard} isPrivate />

    <Route path="/" component={() => <h1>404</h1>} />
  </Switch>
);

export default Routes;
