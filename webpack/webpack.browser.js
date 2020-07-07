const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const nodeEnv = process.env.NODE_ENV;
const isProduction = nodeEnv !== 'development';

const devSettings = {
  mode: 'development',
  devtool: 'inline-source-map',
};

const prodSettings = {
  mode: 'production',
  devtool: 'source-map',
};

const environmentSettings = isProduction ? prodSettings : devSettings;

module.exports = merge(environmentSettings, {
  entry: {
    app: './src/client/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new webpack.EnvironmentPlugin(['NODE_ENV'])
  ],
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  module: {
    rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'eslint-loader'],
    }, {
      test: /\.(png|svg|jpg|jpeg|gif)$/,
      exclude: /node_modules/,
      use: [
        'file-loader',
      ],
    },
  ]},
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
});
