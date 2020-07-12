import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  anotherH2: {
    color: 'pink',
  }
});

const Somewhere = (props) => {
  const theme = useTheme();
  const css = useStyles({ ...props, theme });

  return (
    <div className={css.container}>
      <h2 className={css.anotherH2}>Somewhere</h2>
      <div>we&apos;ll get content later</div>
    </div>
  );
};

export default Somewhere;
