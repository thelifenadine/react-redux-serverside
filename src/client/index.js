import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import routes from '../common/routes';
import { ReduxAsyncConnect } from 'redux-connect';
import configureStore from '../common/configureStore';

const store = configureStore(window.__INITIAL_DATA__);

const initialState = document.querySelector('#initial-state');
if (initialState) {
  initialState.parentElement.removeChild(initialState);
}

const renderApp = () => hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <ReduxAsyncConnect routes={routes} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app"),
  () => {
    const ssStyles = document.getElementById('jss-styles');
    ssStyles.parentNode.removeChild(ssStyles);
  }
);

renderApp();
