import { expect } from 'chai';
import createMappedReducer from './createMappedReducer';
import createRequestHandlers from './createRequestHandlers';
import { pending, fulfilled, rejected } from './asyncActionNameSuffixes';

const ROOT_EXAMPLE_NAME = 'ROOT_EXAMPLE_NAME';

const reducer = createMappedReducer({}, {
  ...createRequestHandlers({ actionNameRoot: ROOT_EXAMPLE_NAME }),
});

describe('the test reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.eql({});
  });

  it('should handle ROOT_EXAMPLE_NAME_PENDING', () => {
    expect(
      reducer({}, {
        type: 'ROOT_EXAMPLE_NAME_PENDING',
        contentKey: 'sweets',
      })
    ).to.eql({
      'sweets': {
        isFetching: true,
        items: [],
      }
    });
  });

  it('should handle ROOT_EXAMPLE_NAME_REJECTED', () => {
    expect(
      reducer({}, {
        type: 'ROOT_EXAMPLE_NAME_REJECTED',
        contentKey: 'sweets',
      })
    ).to.eql({
      'sweets': {
        isFetching: false,
        hasFailed: true,
      }
    });
  });

  it('should handle ROOT_EXAMPLE_NAME_FULFILLED', () => {
    expect(
      reducer({}, {
        type: 'ROOT_EXAMPLE_NAME_FULFILLED',
        contentKey: 'sweets',
        items: [ 1, 2, 3],
        receivedAt: 123,
      })
    ).to.eql({
      'sweets': {
        isFetching: false,
        items: [1, 2, 3],
        receivedAt: 123,
      }
    });
  });
});
