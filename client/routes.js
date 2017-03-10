/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App/App';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require('./modules/Post/pages/PostListPage/PostListPage');
  require('./modules/Post/pages/PostDetailPage/PostDetailPage');
  require('./modules/Video/pages/VideoListPage');
  require('./modules/Cocapi/pages/CocapiTopClansPage');
  require('./modules/Cocapi/pages/CocapiClanDetailPage');
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Route path="/" component={App}>
    <IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Post/pages/PostListPage/PostListPage').default);
        });
      }}
    />
    <Route
      path="/videos"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Video/pages/VideoListPage').default);
        });
      }}
    />
    <Route
      path="/videos/:category"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Video/pages/VideoListPage').default);
        });
      }}
    />
    <Route
      path="/top-clans"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Cocapi/pages/CocapiTopClansPage').default);
        });
      }}
    />
    <Route
      path="/clan/:tag"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Cocapi/pages/CocapiClanDetailPage').default);
        });
      }}
    />
    <Route
      path="/top-players"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Cocapi/pages/CocapiTopPlayersPage').default);
        });
      }}
    />
    <Route
      path="/posts/:slug-:cuid"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Post/pages/PostDetailPage/PostDetailPage').default);
        });
      }}
    />
  </Route>
);
