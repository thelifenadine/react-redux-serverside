import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import AnotherPage from './AnotherPage';
import NotFound from './NotFound';

const App = () => (
  <React.Fragment>
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/another">
        <AnotherPage />
      </Route>
      <NotFound default />
    </Switch>
  </React.Fragment>
);

export default App;
