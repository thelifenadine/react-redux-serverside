import createMappedReducer from './createMappedReducer';
import createRequestHandlers from './utils/createRequestHandlers';

import {
  GET_RECIPES,
} from '../actions/recipes';

const initialState = {};

export default createMappedReducer(initialState, {
  ...createRequestHandlers({ actionNameRoot: GET_RECIPES }),
});
