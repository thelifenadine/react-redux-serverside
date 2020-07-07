const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const nodeEnv = process.env.NODE_ENV;
const isProduction = nodeEnv !== 'development';

module.exports = {
  entry: [
    '@babel/polyfill',
    path.resolve(path.join(__dirname, '../src/server/index.js'))
  ],
  target: 'node',
  externals: [nodeExternals()],
  mode: isProduction ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: ['babel-loader', 'eslint-loader']
      },
    ]
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '../build'),
    filename: 'server.bundle.js',
    libraryTarget: "commonjs2"
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV'])
  ],
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  }
};
