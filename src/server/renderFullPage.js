import serialize from 'serialize-javascript';

const renderFullPage = (markup, initialState, title, css) => {
  return `
    <!DOCTYPE html>
    <html lang="en-us">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <script id="initial-state">window.__INITIAL_DATA__=${serialize(initialState)}</script>
      <style id="jss-server-side">${css}</style>
      </head>

      <body>
        <div id="app">${markup}</div>
        <script src="/runtime.bundle.js"></script>
        <script src="/vendors.bundle.js"></script>
        <script src="/app.bundle.js"></script>
      </body>
    </html>
    `;
};

export default renderFullPage;
