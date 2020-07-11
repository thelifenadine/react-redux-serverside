import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import proxyquire from 'proxyquire';
import { expect } from 'chai';

const MockLink = sinon.stub().returns(<div />);

describe('<Header />', () => {
  let Header;
  const useLocationStub = sinon.stub().returns({ pathname: '/' });
  const useStylesStub = sinon.stub().returns({});
  const createUseStylesStub = sinon.stub().withArgs({}).returns(useStylesStub);
  const dispatchStub = sinon.stub();
  const useDispatchStub = sinon.stub().returns(dispatchStub);
  const appInitOnceStub = sinon.stub();

  before(() => {
    Header = proxyquire.noCallThru().load('./Header', {
      'react-router-dom': {
        Link: MockLink,
        useLocation: useLocationStub,
      },
      'react-redux': {
        useDispatch: useDispatchStub,
      },
      'react-jss': {
        createUseStyles: createUseStylesStub,
      },
      '../actions/app': {
        appInitOnce: appInitOnceStub,
      },
    }).default;
  });

  describe('when the component is rendered', () => {
    let myComponent;

    before(() => {
      myComponent = shallow(<Header />);
    });

    it('should contain two Link components', () => {
      expect(myComponent.find(MockLink)).to.have.lengthOf(2);
    });

    it('should invoke the useDispatch function once', () => {
      expect(useDispatchStub).calledOnce;
    });
  });

  describe('when the home link is clicked', () => {
    let myComponent;

    before(() => {
      myComponent = shallow(<Header />);
      myComponent.find({ 'data-id': 'home-link' }).simulate('click');
    });

    it('should invoke the dispatch function once', () => {
      expect(dispatchStub).calledOnce;
    });

    it('should invoke the appInitOnce function once', () => {
      expect(appInitOnceStub).calledOnce;
    });
  });
});
