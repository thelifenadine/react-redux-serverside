import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import proxyquire from 'proxyquire';

const MockThemeProvider = sinon.stub().returns(<div />);
const MockBaseComponent = sinon.stub().returns(<div />);
const mockTheme = { theColor: 'purple' };

describe('<withTheme />', () => {
  let withTheme;

  before(() => {
    withTheme = proxyquire.noCallThru().load('./withTheme', {
      'react-jss': {
        ThemeProvider: MockThemeProvider,
      },
      '../styles/theme': mockTheme,
    }).default;
  });

  describe('the components expected to be rendered', () => {
    let themeProvider;

    before(() => {
      const WrappedComponent = withTheme(MockBaseComponent);
      const renderedComponent = shallow(<WrappedComponent />);
      themeProvider = renderedComponent.find(MockThemeProvider);
    });

    it('should contain one ThemeProvider component', () => {
      expect(themeProvider).to.have.lengthOf(1);
    });

    it('ThemeProvider should be passed the theme', () => {
      expect(themeProvider.getElement().props.theme).to.be.eql(mockTheme);
    });
  });
});
