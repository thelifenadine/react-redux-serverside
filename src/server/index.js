import express from 'express';
// import cors from 'cors';
import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router';
import { JssProvider, SheetsRegistry, createGenerateId } from 'react-jss';

import configureStore from '../common/configureStore';
import mockApi from './mockApi';
import renderFullPage from './renderFullPage';
import routes from '../common/routes';

const app = express();
// app.use(cors());

// serve the dist folder since that's where our client app.bundle.js file will end up.
app.use(express.static('dist'));

app.get('/favicon.ico', () => {});
app.use('/api', mockApi);

app.get('/*', (req, res) => {
  const store = configureStore();
  const sheets = new SheetsRegistry();
  const generateId = createGenerateId();

  const markup = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        <JssProvider registry={sheets} generateId={generateId}>
          {renderRoutes(routes)}
        </JssProvider>
      </StaticRouter>
    </Provider>
  );
  const initialState = store.getState();
  res.send(renderFullPage(markup, initialState, 'nadine made a website', sheets.toString()));
});

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`);
});

// TODO: handle double request issue
// server.setTimeout(500000);
