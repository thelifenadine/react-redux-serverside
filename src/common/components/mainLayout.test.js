import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import proxyquire from 'proxyquire';

const MockHeaderNavigation = sinon.stub().returns(<div />);
const renderRoutesStub = sinon.stub();
const useStylesStub = sinon.stub().returns({
  columnContainer: 'columnContainerTest',
  containerItem: 'containerItemTest',
});
const createUseStylesStub = sinon.stub().withArgs({}).returns(useStylesStub);

describe('<MainLayout />', () => {
  let MainLayout;

  before(() => {
    MainLayout = proxyquire.noCallThru().load('./MainLayout', {
      'react-router-config': {
        renderRoutes: renderRoutesStub,
      },
      'react-jss': {
        createUseStyles: createUseStylesStub,
      },
      'redux-connect': {
        asyncConnect: sinon.spy(() => component => component),
      },
      './HeaderNavigation': MockHeaderNavigation,
      './withTheme': (component) => (component),
    }).default;
  });

  describe('the expected behavior', () => {
    let myComponent;
    let headerNav;
    const mockRouteProp = {
      routes: [],
    };

    before(() => {
      myComponent = shallow(<MainLayout route={mockRouteProp} />);
      headerNav = myComponent.find(MockHeaderNavigation);
    });

    it('should contain one HeaderNavigation component', () => {
      expect(headerNav).to.have.lengthOf(1);
    });

    it('the headerNav component should be passed the correct props', () => {
      expect(headerNav.getElement().props.containerClassName).to.be.eql('columnContainerTest');
      expect(headerNav.getElement().props.itemClassName).to.be.eql('containerItemTest');
    });

    it('should invoke the renderRoutes once with the routes from the prop', () => {
      expect(renderRoutesStub).calledOnce.calledOnceWith(mockRouteProp.routes);
    });
  });
});
