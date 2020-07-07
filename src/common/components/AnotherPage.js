import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  container: {
    color: theme.colorPrimary,
  },
  anotherH2: {
    color: 'yellow',
  }
}));

const AnotherPage = (props) => {
  const theme = useTheme();
  const css = useStyles({ ...props, theme });

  return (
    <div className={css.container}>
      <h2 className={css.anotherH2}>AnotherPage</h2>
      <div>needs content too</div>
    </div>
  );
};

export default AnotherPage;
