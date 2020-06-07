import React from 'react';
import { Switch, Route} from 'react-router-dom';

import CatalogRoute from './CatalogRoute';
import SearchRoute from './SearchRoute';
import {TopBar} from '../components';
import { Product } from '../containers';

const Routes = () => (
  <Switch>
    <Route exact path="/" >
      <TopBar />
      <CatalogRoute/>
    </Route>

    <Route path="/search">
      <TopBar hideSearch={true}/>
      <SearchRoute />
    </Route>

    <Route path="/product" 
           render={props => (
            <>
            <TopBar />
            <Product props={props.location}/>
            </>
          )} 
    />
  </Switch>
)

export default Routes;
