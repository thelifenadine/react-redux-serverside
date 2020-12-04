import React from 'react';
import { createUseStyles } from 'react-jss';
import Header1 from './layout/Header1';

const useStyles = createUseStyles({
  myH2: {
    color: 'green',
  },
  content: (props) => ({
    color: props.contentColor,
  }),
});

const Home = (props) => {
  const css = useStyles(props);

  return (
    <div>
      <Header1 className={css.myH2}>Home</Header1>
      <div className={css.content}>nothing happening</div>
    </div>
  );
};

Home.defaultProps = {
  contentColor: 'red'
};

export default Home;
