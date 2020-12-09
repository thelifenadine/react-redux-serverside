export const GET_RECIPES = 'GET_RECIPES';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';

export function selectCategory(category) {
  return {
    type: SELECT_CATEGORY,
    category,
  };
}

function fetchRecipes(category) {
  return {
    type: GET_RECIPES,
    api: {
      endpoint: 'getByCategory',
      args: { category },
    },
    contentKey: category,
  };
}

function shouldFetchRecipes(state, category) {
  const recipes = state.recipesByCategory[category];
  if (!recipes) {
    return true;
  } else if (recipes.isFetching) {
    return false;
  } else {
    return recipes.didInvalidate; // canceled? forgot the use case
  }
}

export function fetchRecipesIfNeeded(category) {
  return (dispatch, getState) => {
    if (shouldFetchRecipes(getState(), category)) {
      return dispatch(fetchRecipes(category));
    }
  };
}
