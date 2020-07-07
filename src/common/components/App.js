import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'react-jss';
import Header from './Header';
import Home from './Home';
import AnotherPage from './AnotherPage';
import NotFound from './NotFound';

const theme = {
  colorPrimary: 'blue'
};

const App = () => (
  <ThemeProvider theme={theme}>
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
  </ThemeProvider>
);

export default App;
