export default (theme) => ({
  '@global': {
    html: {
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
      boxSizing: 'border-box',
      fontSize: 16,
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    },
    '*, *: before, *: after': {
      boxSizing: 'inherit',
    },
    'body, h1, h2, h3, h4, h5, h6, p, ol, ul': {
      margin: 0,
      padding: 0,
      fontWeight: 'normal',
    },
    'ol, ul': {
      listStyle: 'none',
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
    },
    'strong, b': {
      fontWeight: theme.typography.fontWeightBold,
    },
    body: {
      color: theme.textPrimary,
      backgroundColor: theme.palette.background,
      '@media print': {
        // Save printer ink.
        color: theme.palette.black,
        backgroundColor: theme.palette.white,
      },
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      '&::backdrop': {
        backgroundColor: theme.palette.white,
      },
    },
    a: {
      textDecoration: 'none',
      color: theme.palette.textSecondary,
    },
    label: {
      color: theme.palette.textPrimary,
    },
    input: {
      padding: theme.form.padding,
      marginBottom: theme.form.spacing,
      border: `solid 1px ${theme.palette.border}`,
    },
    button: {
      padding: theme.form.padding,
      border: `solid 1px ${theme.palette.border}`,
      fontSize: 16,
      color: theme.palette.textSecondary,
      '&:hover': {
        cursor: 'pointer',
      }
    },
  },
});
