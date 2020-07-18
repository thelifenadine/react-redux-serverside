import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../common/routes';
import configureStore from '../common/configureStore';

const store = configureStore(window.__INITIAL_DATA__);

const initialState = document.querySelector('#initial-state');
if (initialState) {
  initialState.parentElement.removeChild(initialState);
}

const renderApp = () => hydrate(
  <Provider store={store}>
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>,
  document.getElementById("app"),
  () => {
    const ssStyles = document.getElementById('jss-styles');
    ssStyles.parentNode.removeChild(ssStyles);
  }
);

renderApp();
