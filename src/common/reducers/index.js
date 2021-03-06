import { reducer as reduxAsyncConnect } from 'redux-connect';
import { combineReducers } from 'redux';
import app from './app';
import selectedCategory from './selectedCategory';
import recipesByCategory from './recipesByCategory';

export default combineReducers({
  app,
  recipesByCategory,
  reduxAsyncConnect,
  selectedCategory,
});
