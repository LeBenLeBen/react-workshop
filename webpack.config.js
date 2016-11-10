/* eslint-disable no-var */
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    app: ['./app/index.js']
  },
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js'],
    root: [
      path.resolve(__dirname, 'app'),
      path.resolve(__dirname, 'app/scripts')
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: [
          path.resolve(__dirname, 'app')
        ]
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss', 'sass'],
        include: path.resolve(__dirname, 'app/styles')
      }
    ]
  }
};
