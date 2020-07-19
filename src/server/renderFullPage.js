import serialize from 'serialize-javascript';

const renderFullPage = (markup, initialState, title, css, extractor) => {
  return `
    <!DOCTYPE html>
    <html lang="en-us">
      <head>
      ${extractor.getLinkTags()}
      ${extractor.getStyleTags()}
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <script id="initial-state">window.__INITIAL_DATA__=${serialize(initialState)}</script>
      <style type="text/css" id="jss-styles">${css.toString()}</style>
      </head>

      <body>
        <div id="app">${markup}</div>
        ${extractor.getScriptTags()}
      </body>
    </html>
    `;
};

export default renderFullPage;
