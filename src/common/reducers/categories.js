import createMappedReducer from './createMappedReducer';

import {
  SELECT_CATEGORY,
} from '../actions/recipe';

const initialState = 'sweets';

export default createMappedReducer(initialState, {
  [SELECT_CATEGORY](state, action) {
    return action.category;
  },
});
