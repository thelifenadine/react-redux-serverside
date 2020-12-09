import axios from 'axios';
import { pending, fulfilled, rejected } from '../reducers/utils/asyncActionNameSuffixes';
import isServer from '../utils/isServer';

const server = 'http://localhost:3000';

const callApi = (options) => {
  const { endpoint, args, method } = options;

  return axios({
    method: method || 'post',
    url: `${server}/api/${endpoint}`,
    data: { ...args },
  });
};

// this  middleware is triggered when the api is present on the action
export default () => next => action => {
  const { type, api } = action;

  if (typeof api === 'undefined') {
    return next(action);
  }

  const { endpoint, args } = api;

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.');
  }

  const actionWith = data => {
    const finalAction = Object.assign({}, action, data);
    delete finalAction['api']; // remove endpoint, args, etc
    return finalAction;
  };

  next(actionWith({ type: pending(type) }));

  return callApi({ endpoint, args }).then(
    response => next(actionWith({
      items: response.data,
      type: fulfilled(type),
      receivedAt: isServer() ? null : Date.now(),
    })),
    error => next(actionWith({
      type: rejected(type),
      error: error.message || 'Request failed',
    }))
  );
};
