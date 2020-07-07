import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  myH2: {
    color: 'green',
    margin: {
      top: 20,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  content: (props) => ({
    color: props.contentColor,
  }),
});

const Home = (props) => {
  const css = useStyles(props);

  return (
    <div>
      <h2 className={css.myH2}>Home</h2>
      <div className={css.content}>needs content</div>
    </div>
  );
};

Home.defaultProps = {
  contentColor: 'red'
};

export default Home;
