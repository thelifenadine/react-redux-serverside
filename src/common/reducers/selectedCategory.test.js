import { expect } from 'chai';
import reducer from './selectedCategory';
import { SELECT_CATEGORY } from '../actions/recipes';

describe('selectedCategory reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.eql('sweets');
  });

  it('should handle SELECT_CATEGORY', () => {
    expect(
      reducer({}, {
        type: SELECT_CATEGORY,
        category: 'lunches',
      })
    ).to.eql('lunches');
  });
});
