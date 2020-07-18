import get from 'lodash/get';
import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles, useTheme } from 'react-jss';
import { asyncConnect } from 'redux-connect';
import { fetchRecipesIfNeeded } from '../actions/recipes';

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

const mapStateToProps = (state) => {
  const lunchItems = get(state, 'recipesByCategory.lunch.items', []);
  const sweetItems = get(state, 'recipesByCategory.sweets.items', []);

  return { lunches: lunchItems, sweets: sweetItems };
};

export default asyncConnect([
  {
    promise: ({ store: { dispatch } }) => (
      dispatch(fetchRecipesIfNeeded('lunch'))
    ),
  },
  {
    promise: ({ store: { dispatch } }) => (
      dispatch(fetchRecipesIfNeeded('sweets'))
    ),
  }
], mapStateToProps)(Somewhere);
