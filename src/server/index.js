import express from 'express';
// import cors from 'cors';
import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { ReduxAsyncConnect, loadOnServer } from 'redux-connect';
import { JssProvider, SheetsRegistry, createGenerateId } from 'react-jss';
import { parse as parseUrl } from 'url';
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
  const url = req.originalUrl || req.url;
  const location = parseUrl(url);
  const helpers = {};

  loadOnServer({ store, location, routes, helpers })
    .then(() => {
      const context = {};

      const markup = renderToString(
        <Provider store={store} key="provider">
          <StaticRouter location={req.url} context={context}>
            <JssProvider registry={sheets} generateId={generateId}>
              <ReduxAsyncConnect routes={routes} helpers={helpers} />
            </JssProvider>
          </StaticRouter>
        </Provider>
      );

      if (context.url) {
        req.header('Location', context.url);
        return res.send(302);
      }

      const initialState = store.getState();
      res.send(renderFullPage(markup, initialState, 'nadine made a website', sheets.toString()));
    });
});

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`);
});

// TODO: handle double request issue
// server.setTimeout(500000);
