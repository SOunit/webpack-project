import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './components/Home';
import ArtistMain from './components/artists/ArtistMain';

// plain routes component pattern
const componentRoutes = {
  component: Home,
  path: '/',
  indexRoute: { component: ArtistMain },
  childRoutes: [
    {
      path: 'artists/new',
      // asynchroness load component
      getComponent(location, cb) {
        // for webpack separate file load
        System.import('./components/artists/ArtistCreate').then((module) =>
          // syntax: cb(error, module)
          cb(null, module.default)
        );
      },
    },
    {
      path: 'artists/:id',
      // asynchroness load component
      getComponent(location, cb) {
        // for webpack separate file load
        System.import('./components/artists/ArtistDetail').then((module) =>
          // syntax: cb(error, module)
          cb(null, module.default)
        );
      },
    },
    {
      path: 'artists/:id/edit',
      // asynchroness load component
      getComponent(location, cb) {
        // for webpack separate file load
        System.import('./components/artists/ArtistEdit').then((module) =>
          // syntax: cb(error, module)
          cb(null, module.default)
        );
      },
    },
  ],
};

const Routes = () => {
  return (
    // JSX syntax for react
    // <Router history={hashHistory}>
    //   <Route path='/' component={Home}>
    //     <IndexRoute component={ArtistMain} />
    //     <Route path='artists/new' component={ArtistCreate} />
    //     <Route path='artists/:id' component={ArtistDetail} />
    //     <Route path='artists/:id/edit' component={ArtistEdit} />
    //   </Route>
    // </Router>

    // plain route component for webpack
    <Router history={hashHistory} routes={componentRoutes} />
  );
};

export default Routes;
