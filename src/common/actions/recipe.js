import axios from 'axios';
const server = 'http://localhost:3000';

export const REQUEST_RECIPES = 'REQUEST_RECIPES';
export const RECEIVE_RECIPES = 'RECEIVE_RECIPES';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const INVALIDATE_CATEGORY = 'INVALIDATE_CATEGORY';

export function selectCategory(category) {
  return {
    type: SELECT_CATEGORY,
    category,
  };
}

export function invalidateCategory(category) {
  return {
    type: INVALIDATE_CATEGORY,
    category,
  };
}

function requestPosts(category) {
  return {
    type: REQUEST_RECIPES,
    category,
  };
}

function receivePosts(category, json) {
  return {
    type: RECEIVE_RECIPES,
    category,
    recipes: json.data,
    receivedAt: Date.now(),
  };
}

function fetchPosts(category) {
  return dispatch => {
    dispatch(requestPosts(category));
    axios({
      method: 'post',
      url: `${server}/api/getByCategory`,
      data: { category },
    }).then(resp => dispatch(receivePosts(category, resp)));
  };
}

function shouldFetchPosts(state, category) {
  const recipes = state.recipesByCategory[category];
  if (!recipes) {
    return true;
  } else if (recipes.isFetching) {
    return false;
  } else {
    return recipes.didInvalidate;
  }
}

export function fetchPostsIfNeeded(category) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), category)) {
      return dispatch(fetchPosts(category));
    }
  };
}
