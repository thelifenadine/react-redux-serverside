import React from 'react';
import { createUseStyles } from 'react-jss';
import Header1 from '../layout/Header1';

const useStyles = createUseStyles({
  testclasss: {
    color: 'green',
  },
});

const Login = () => {
  const css = useStyles();

  return (
    <div>
      <Header1 className={css.testclasss}>Login</Header1>
    </div>
  );
};

export default Login;
