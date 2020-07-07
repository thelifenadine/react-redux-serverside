import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import configureStore from '../common/configureStore';
import App from '../common/components/App';

const store = configureStore(window.__INITIAL_DATA__);

const initialState = document.querySelector('#initial-state');
if (initialState) {
  initialState.parentElement.removeChild(initialState);
}

const renderApp = () => hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);

renderApp();
