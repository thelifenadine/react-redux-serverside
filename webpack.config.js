var serverConfig = require('./webpack/webpack.server.js');
var browserConfig = require('./webpack/webpack.browser.js');

module.exports = [browserConfig, serverConfig];
