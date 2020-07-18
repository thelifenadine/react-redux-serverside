import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import proxyquire from 'proxyquire';

const MockHeader = sinon.stub().returns(<div />);
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
      './Header': MockHeader,
      './withTheme': (component) => (component),
    }).default;
  });

  describe('the expected behavior', () => {
    let myComponent;
    let header;
    const mockRouteProp = {
      routes: [],
    };

    before(() => {
      myComponent = shallow(<MainLayout route={mockRouteProp} />);
      header = myComponent.find(MockHeader);
    });

    it('should contain one Header component', () => {
      expect(header).to.have.lengthOf(1);
    });

    it('the header component should be passed the correct props', () => {
      expect(header.getElement().props.containerClassName).to.be.eql('columnContainerTest');
      expect(header.getElement().props.itemClassName).to.be.eql('containerItemTest');
    });

    it('should invoke the renderRoutes once with the routes from the prop', () => {
      expect(renderRoutesStub).calledOnce.calledOnceWith(mockRouteProp.routes);
    });
  });
});
