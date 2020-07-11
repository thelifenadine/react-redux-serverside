import React from 'react';
import { ThemeProvider } from 'react-jss';
import { renderRoutes } from 'react-router-config';
import theme from '../styles/theme';
import routes from '../routes';

const App = () => (
  <ThemeProvider theme={theme}>
    {renderRoutes(routes)}
  </ThemeProvider>
);

export default App;
