/**
 * Client entry point
 */
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import { configureStore } from './store';
// Import config
import config from './config'
// Initialize store
const store = configureStore(window.__INITIAL_STATE__);
// Set client config
store.clientConfig = config;
const mountApp = document.getElementById('app');

render(
  <AppContainer>
    <App store={store}/>
  </AppContainer>,
  mountApp
);

// For hot reloading of react components
if (module.hot) {
  module.hot.accept('./App', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./App').default; // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextApp store={store} />
      </AppContainer>,
      mountApp
    );
  });
}
