import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  anotherH2: {
    color: 'pink',
    marginBottom: 20,
  }
});

const Somewhere = (props) => {
  const { lunches, sweets } = props;
  const theme = useTheme();
  const css = useStyles({ ...props, theme });

  return (
    <div className={css.container}>
      <h2 className={css.anotherH2}>Somewhere</h2>
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
