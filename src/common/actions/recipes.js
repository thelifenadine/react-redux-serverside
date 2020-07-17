import axios from 'axios';
import getRequestHandlers from './utils/getRequestHandlers';
const server = 'http://localhost:3000';

export const GET_RECIPES = 'GET_RECIPES';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';

export function selectCategory(category) {
  return {
    type: SELECT_CATEGORY,
    category,
  };
}

function fetchRecipes(category) {
  const { requestStarted, requestFailed, requestSuccess } = getRequestHandlers(GET_RECIPES);

  return async dispatch => {
    dispatch(requestStarted(category));
    let response;

    try {
      response = await axios({
        method: 'post',
        url: `${server}/api/getByCategory`,
        data: { category },
      });

      if (response.data) {
        dispatch(requestSuccess(category, response.data));
      } else {
        dispatch(requestFailed(category, 'no data returned'));
      }
    } catch (error) {
      console.log('error', response);
      dispatch(requestFailed(category, error.message));
    }

  };
}

function shouldFetchRecipes(state, category) {
  const recipes = state.recipesByCategory[category];
  if (!recipes) {
    return true;
  } else if (recipes.isFetching) {
    return false;
  } else {
    return recipes.didInvalidate;
  }
}

export function fetchRecipesIfNeeded(category) {
  return (dispatch, getState) => {
    if (shouldFetchRecipes(getState(), category)) {
      return dispatch(fetchRecipes(category));
    }
  };
}
