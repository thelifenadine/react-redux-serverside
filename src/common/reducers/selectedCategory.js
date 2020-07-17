import createMappedReducer from './createMappedReducer';

import {
  SELECT_CATEGORY,
} from '../actions/recipes';

const initialState = 'sweets';

export default createMappedReducer(initialState, {
  [SELECT_CATEGORY](state, action) {
    return action.category;
  },
});
