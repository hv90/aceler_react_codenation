import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CatalogRoute from './CatalogRoute/CatalogRoute';
import SearchRoute from './SearchRoute/SearchRoute';
import TopBar from '../components/TopBar/TopBar';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <TopBar />
      <CatalogRoute />
    </Route>

    <Route path="/search">
      <TopBar hideSearch={true}/>
      <SearchRoute />
    </Route>

    <Route path="/login">
      <SearchRoute />
    </Route>

    <Route path="/contact">
      <SearchRoute />
    </Route>

    <Route path="/cart">
      <SearchRoute />
    </Route>
  </Switch>
)

export default Routes;
