import createMappedReducer from './createMappedReducer';

import {
  INVALIDATE_CATEGORY,
  REQUEST_RECIPES,
  RECEIVE_RECIPES
} from '../actions/recipe';

const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: []
};

export default createMappedReducer({}, {
  [INVALIDATE_CATEGORY](state, action) {
    return {
      ...state,
      [action.category]: {
        ...initialState,
        didInvalidate: true,
      },
    };
  },
  [RECEIVE_RECIPES](state, action) {
    return {
      ...state,
      [action.category]: {
        isFetching: false,
        didInvalidate: false,
        items: action.recipes,
        lastUpdated: action.receivedAt
      },
    };
  },
  [REQUEST_RECIPES](state, action) {
    return {
      ...state,
      [action.category]: {
        isFetching: true,
        didInvalidate: false,
      },
    };
  },
});
