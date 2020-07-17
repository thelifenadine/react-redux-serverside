import { pending, success, failed } from './asyncActionNameSuffixes';

export default function createRequestHandlers({ actionNameRoot }) {
  return {
    [pending(actionNameRoot)](state, action) {
      const { contentKey } = action;
      return {
        ...state,
        [contentKey]: {
          items: [],
          isFetching: true,
        },
      };
    },
    [failed(actionNameRoot)](state, action) {
      const { contentKey } = action;

      return {
        ...state,
        [contentKey]: {
          isFetching: false,
          hasFailed: true,
        },
      };
    },
    [success(actionNameRoot)](state, action) {
      const { contentKey, items, receivedAt } = action;

      return {
        ...state,
        [contentKey]: {
          isFetching: false,
          items,
          receivedAt,
        },
      };
    },
  };
}
