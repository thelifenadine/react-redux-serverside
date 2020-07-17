import { pending, success, failed } from '../../reducers/utils/asyncActionNameSuffixes';

export default function getRequestHandlers(actionNameRoot) {
  function requestStarted(contentKey) {
    return {
      type: pending(actionNameRoot),
      contentKey,
    };
  }

  function requestFailed(contentKey, error) {
    return {
      type: failed(actionNameRoot),
      contentKey,
      error,
    };
  }

  function requestSuccess(contentKey, items) {
    return {
      type: success(actionNameRoot),
      contentKey,
      items,
      receivedAt: Date.now(),
    };
  }

  return { requestStarted, requestFailed, requestSuccess };
}
