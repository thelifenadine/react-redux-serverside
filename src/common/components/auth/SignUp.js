import React from 'react';
import { createUseStyles } from 'react-jss';
import Header1 from '../layout/Header1';
import TextInput from '../form/TextInput';
import Button from '../form/Button';
import { mediaQueryMin1000 } from '../../styles/mediaQueries';

const useStyles = createUseStyles(theme => ({
  form: {
    margin: `${theme.form.padding * 2}px auto`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    [mediaQueryMin1000]: {
      width: '50%',
    },
  },
}));

const formId = 'signup';

const SignUp = () => {
  const css = useStyles();

  return (
    <div className={css.form}>
      <Header1 className={css.test}>Sign Up</Header1>
      <TextInput
        label="Email"
        id={`${formId}-email`}
      />
      <TextInput
        label="Password"
        id={`${formId}-password`}
        type="password"
      />
      <TextInput
        label="Confirm Password"
        id={`${formId}-confirm`}
        type="password"
      />
      <Button
        text="Submit"
        id={`${formId}-submit`}
      />
    </div>
  );
};

export default SignUp;
