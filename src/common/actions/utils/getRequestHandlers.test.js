import sinon from 'sinon';
import proxyquire from 'proxyquire';
import { expect } from 'chai';
const now = 1483228800000;

describe('getRequestHandler creator', () => {
  let getRequestHandlers;
  let clock;

  before(() => {
    clock = sinon.useFakeTimers({
      now,
    });

    getRequestHandlers = proxyquire.noCallThru().load('./getRequestHandlers', {}).default;
  });

  after(() => {
    clock.restore();
  });

  describe('the handler behaviors', () => {
    let handlers;

    before(() => {
      handlers = getRequestHandlers('GET_OFF_THE_COUCH');
    });

    it('the requestStarted handler should return the pending info', () => {
      expect(handlers.requestStarted('sister')).to.be.eql({
        type: 'GET_OFF_THE_COUCH_PENDING',
        contentKey: 'sister',
      });
    });

    it('the requestFailed handler should return the failed info', () => {
      expect(handlers.requestFailed('brother', 'myError')).to.be.eql({
        type: 'GET_OFF_THE_COUCH_FAILED',
        contentKey: 'brother',
        error: 'myError',
      });
    });

    it('the requestSuccess handler should return the success info', () => {
      expect(handlers.requestSuccess('sistersister', [{ ice: 'cream' }])).to.be.eql({
        type: 'GET_OFF_THE_COUCH_SUCCESS',
        contentKey: 'sistersister',
        receivedAt: 1483228800000,
        items: [{ ice: 'cream' }]
      });
    });
  });
});
