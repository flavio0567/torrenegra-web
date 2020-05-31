import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Logon from '../pages/Logon';
import Project from '../pages/Project';
import User from '../pages/Register/User';
import Client from '../pages/Register/Client';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Logon} />

    <Route path="/project" component={Project} isPrivate />

    <Route path="/users" component={User} isPrivate />

    <Route path="/clients" component={Client} isPrivate />
  </Switch>
);

export default Routes;
