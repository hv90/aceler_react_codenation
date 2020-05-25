import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Catalog from '../containers/Catalog/Catalog';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Catalog/>
    </Route>
  </Switch>
)

export default Routes;
