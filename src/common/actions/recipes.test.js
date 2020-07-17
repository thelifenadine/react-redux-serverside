import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import proxyquire from 'proxyquire';
import { expect } from 'chai';

import {
  GET_RECIPES,
} from './recipes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const axiosStub = sinon.stub();
const now = 1483228800000;

describe('recipe actions', () => {
  let fileImport;
  let clock;

  before(() => {
    clock = sinon.useFakeTimers({
      now,
    });

    fileImport = proxyquire.noCallThru().load('./recipes', {
      'axios': axiosStub,
    });
  });

  after(() => {
    clock.restore();
  });

  describe('when the component is rendered', () => {
    before(() => {
      axiosStub.returns({
        data: [{ item: 'one' }],
      });
    });

    it('creates PENDING and SUCCESS when fetching recipes has been fetched', () => {
      const expectedActions = [
        { type: `${GET_RECIPES}_PENDING`, contentKey: 'sweets' },
        { type: `${GET_RECIPES}_SUCCESS`, contentKey: 'sweets', receivedAt: now, items: [{ item: 'one' }] },
      ];

      const store = mockStore({
        recipesByCategory: 'lunches',
      });

      return store.dispatch(fileImport.fetchRecipesIfNeeded('sweets')).then(() => {
        // return async actions
        expect(store.getActions()).to.eql(expectedActions);
      });
    });
  });
});
