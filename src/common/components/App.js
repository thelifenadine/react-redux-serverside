import React from 'react';
import { ThemeProvider } from 'react-jss';

import MainLayout from './MainLayout';
import theme from '../styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <MainLayout />
  </ThemeProvider>
);

export default App;
