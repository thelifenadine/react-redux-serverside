import { combineReducers } from 'redux';
import app from './app';
import categories from './categories';
import recipes from './recipes';

export default combineReducers({
  app,
  recipesByCategory: recipes,
  selectedCategory: categories,
});
