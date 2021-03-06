var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  'faker',
  'lodash',
  'react',
  'react-dom',
  'react-input-range',
  'react-redux',
  'react-router',
  'redux',
  'redux-form',
  'redux-thunk',
];

module.exports = {
  entry: { bundle: './src/index.js', vendor: VENDOR_LIBS },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/,
      },
    ],
  },
  // to check and not include common lib. ex. react
  // without this, bundle.js and vendor.js are both large
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      // manifest is for cashing and webpack
      names: ['vendor', 'manifest'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
};
