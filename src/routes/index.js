import React from 'react';
import { Switch, Route} from 'react-router-dom';

import ProductRoute from './ProductRoute';
import CartRoute from './CartRoute';
import CatalogRoute from './CatalogRoute';
import SearchRoute from './SearchRoute';
import {TopBar} from '../components';

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
            <ProductRoute props={props.location}/>
            </>
          )} 
    />

    <Route path="/cart">
      <TopBar hideCart={true} />
      <CartRoute />
    </Route>
  </Switch>
)

export default Routes;
