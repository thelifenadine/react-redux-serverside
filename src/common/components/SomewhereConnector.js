import get from 'lodash/get';
import React from 'react';
import { asyncConnect } from 'redux-connect';
import loadable from '@loadable/component';
import { fetchRecipesIfNeeded } from '../actions/recipes';

const Somewhere = loadable(() => import('./Somewhere'), {
  fallback: <div>Loading...</div>,
});

const mapStateToProps = (state) => {
  const lunchItems = get(state, 'recipesByCategory.lunch.items', []);
  const sweetItems = get(state, 'recipesByCategory.sweets.items', []);

  return { lunches: lunchItems, sweets: sweetItems };
};

export default asyncConnect([{
  promise: ({ store: { dispatch } }) => (
    dispatch(fetchRecipesIfNeeded('lunch'))
  ),
}, {
  promise: ({ store: { dispatch } }) => (
    dispatch(fetchRecipesIfNeeded('sweets'))
  ),
}], mapStateToProps)(Somewhere);
