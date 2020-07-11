import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import proxyquire from 'proxyquire';

const MockThemeProvider = sinon.stub().returns(<div />);
const renderRoutesStub = sinon.stub();
const mockTheme = { theColor: 'purple' };
const mockRoutes = [{ component: 'hi' }];

describe('<App />', () => {
  let App;

  before(() => {
    App = proxyquire.noCallThru().load('./App', {
      'react-router-config': {
        renderRoutes: renderRoutesStub,
      },
      'react-jss': {
        ThemeProvider: MockThemeProvider,
      },
      '../routes': mockRoutes,
      '../styles/theme': mockTheme,
    }).default;
  });

  describe('the components expected to be rendered', () => {
    let myComponent;
    let themeProvider;

    before(() => {
      myComponent = shallow(<App />);
      themeProvider = myComponent.find(MockThemeProvider);
    });

    it('should contain one ThemeProvider component', () => {
      expect(themeProvider).to.have.lengthOf(1);
    });

    it('ThemeProvider should be passed the theme', () => {
      expect(themeProvider.getElement().props.theme).to.be.eql(mockTheme);
    });

    it('should invoke the renderRoutes once with the routes from the prop', () => {
      expect(renderRoutesStub).calledOnce.calledOnceWith(mockRoutes);
    });
  });
});
