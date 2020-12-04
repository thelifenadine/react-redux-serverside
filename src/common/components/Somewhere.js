import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles, useTheme } from 'react-jss';
import Header1 from './layout/Header1';

const useStyles = createUseStyles({
  anotherH2: {
    color: 'pink',
  }
});

const Somewhere = (props) => {
  const { lunches, sweets } = props;
  const theme = useTheme();
  const css = useStyles({ ...props, theme });

  return (
    <div className={css.container}>
      <Header1 className={css.anotherH2}>Somewhere in pink, data is passed through props from route connector component</Header1>
      {lunches &&
        <ul>
          {lunches.map(item => (<li key={item.name}>{item.name}</li>))}
        </ul>
      }
      <hr />
      {sweets &&
        <ul>
          {sweets.map(item => (<li key={item.name}>{item.name}</li>))}
        </ul>
      }
    </div>
  );
};

Somewhere.propTypes = {
  sweets: PropTypes.array.isRequired,
  lunches: PropTypes.array.isRequired,
};

export default Somewhere;
