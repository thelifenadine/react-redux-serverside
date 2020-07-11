import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  anotherH2: {
    color: 'orange',
  }
});

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
