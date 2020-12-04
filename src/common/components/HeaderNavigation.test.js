import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import proxyquire from 'proxyquire';
import { expect } from 'chai';

const MockLink = sinon.stub().returns(<div />);

describe('<HeaderNavigation />', () => {
  let HeaderNavigation;
  const useLocationStub = sinon.stub().returns({ pathname: '/' });
  const useStylesStub = sinon.stub().returns({});
  const createUseStylesStub = sinon.stub().withArgs({}).returns(useStylesStub);
  const dispatchStub = sinon.stub();
  const useDispatchStub = sinon.stub().returns(dispatchStub);
  const fetchRecipesIfNeededStub = sinon.stub();

  before(() => {
    HeaderNavigation = proxyquire.noCallThru().load('./HeaderNavigation', {
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
      '../actions/recipes': {
        fetchRecipesIfNeeded: fetchRecipesIfNeededStub,
      },
    }).default;
  });

  describe('when the component is rendered', () => {
    let myComponent;

    before(() => {
      myComponent = shallow(<HeaderNavigation />);
    });

    it('should contain 5 Link components', () => {
      expect(myComponent.find(MockLink)).to.have.lengthOf(5);
    });

    it('should invoke the useDispatch function once', () => {
      expect(useDispatchStub).calledOnce;
    });
  });

  describe('when the home link is clicked', () => {
    let myComponent;

    before(() => {
      myComponent = shallow(<HeaderNavigation />);
      myComponent.find({ 'data-id': 'home-link' }).simulate('click');
    });

    it('should invoke the dispatch function once', () => {
      expect(dispatchStub).calledOnce;
    });

    it('should invoke the fetchRecipesIfNeeded function once', () => {
      expect(fetchRecipesIfNeededStub).calledOnce;
    });
  });
});
