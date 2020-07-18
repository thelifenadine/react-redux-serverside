import { expect } from 'chai';
import reducer from './recipesByCategory';

describe('recipesByCategory reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.eql({});
  });

  it('should handle GET_RECIPES_PENDING', () => {
    expect(
      reducer({}, {
        type: 'GET_RECIPES_PENDING',
        contentKey: 'sweets'
      })
    ).to.eql({
      'sweets': {
        isFetching: true,
        items: [],
      }
    });
  });
});
