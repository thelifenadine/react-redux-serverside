const colorPrimary = '#666';
const colorSecondaryText = '#333';
// const colorPrimaryText = '#ffffff';
// const colorPrimaryLight = '#62727b';
// const colorPrimaryDark = '#102027';
// const colorSecondary = '#cfd8dc';
// const colorSecondaryLight = '#ffffff';
// const colorSecondaryDark = '#9ea7aa';
const borderColor = '#eee';

const theme = {
  typography: {
    fontWeightBold: 500,
  },
  palette: {
    background: 'white',
    black: 'black',
    border: borderColor,
    white: 'white',
    textPrimary: colorPrimary,
    textSecondary: colorSecondaryText,
  },
  border: `${borderColor} 1px solid`,
  grid: {
    spacing: 20,
  },
  form: {
    padding: 10,
    spacing: 15,
  },
  nav: {
    linkPadding: 15,
    letterSpacing: -0.5,
    textColor: colorPrimary,
    activeColor: colorSecondaryText,
    hoverColor: colorSecondaryText,
  }
};

export default theme;
