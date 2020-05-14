import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Logon from '../pages/Logon';
import Dashboard from '../pages/Dashboard';
import User from '../pages/Register/User';
import Client from '../pages/Register/Client';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Logon} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/users" component={User} />
    <Route path="/clients" component={Client} />
  </Switch>
);

export default Routes;
