import React from 'react';
import { ThemeProvider } from 'react-jss';
import theme from '../styles/theme';

export default function withTheme(BaseComponent) {
  const WrappedComponent = (props) => (
    <ThemeProvider theme={theme}>
      <BaseComponent {...props} />
    </ThemeProvider>
  );

  return WrappedComponent;
}
