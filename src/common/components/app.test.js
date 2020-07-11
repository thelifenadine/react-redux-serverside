import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import proxyquire from 'proxyquire';

const MockThemeProvider = sinon.stub().returns(<div />);
const MockMainLayout = sinon.stub().returns(<div />);
const mockTheme = { theColor: 'purple' };

describe('<App />', () => {
  let App;

  before(() => {
    App = proxyquire.noCallThru().load('./App', {
      'react-jss': {
        ThemeProvider: MockThemeProvider,
      },
      './MainLayout': MockMainLayout,
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

    it('should contain one MainLayout component', () => {
      expect(myComponent.find(MockMainLayout)).to.have.lengthOf(1);
    });
  });
});
