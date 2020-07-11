import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import proxyquire from 'proxyquire';

const MockSwitch = sinon.stub().returns(<div />);
const MockRoute = sinon.stub().returns(<div />);
const MockHome = sinon.stub().returns(<div />);
const MockOther = sinon.stub().returns(<div />);
const MockNotFound = sinon.stub().returns(<div />);

const useStylesStub = sinon.stub().returns({});
const createUseStylesStub = sinon.stub().withArgs({}).returns(useStylesStub);

describe('<MainLayout />', () => {
  let MainLayout;

  before(() => {
    MainLayout = proxyquire.noCallThru().load('./MainLayout', {
      'react-router-dom': {
        Switch: MockSwitch,
        Route: MockRoute,
      },
      'react-jss': {
        createUseStyles: createUseStylesStub,
      },
      './Home': MockHome,
      './AnotherPage': MockOther,
      './NotFound': MockNotFound,
    }).default;
  });

  describe('the components expected to be rendered', () => {
    let myComponent;

    before(() => {
      myComponent = shallow(<MainLayout />);
    });

    it('should contain one Switch component', () => {
      expect(myComponent.find(MockSwitch)).to.have.lengthOf(1);
    });

    it('should contain two Route components', () => {
      expect(myComponent.find(MockRoute)).to.have.lengthOf(2);
    });

    it('should contain one Home component', () => {
      expect(myComponent.find(MockHome)).to.have.lengthOf(1);
    });

    it('should contain one Other component', () => {
      expect(myComponent.find(MockOther)).to.have.lengthOf(1);
    });

    it('should contain one NotFound component', () => {
      expect(myComponent.find(MockNotFound)).to.have.lengthOf(1);
    });
  });
});
