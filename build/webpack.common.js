var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var ROOT_PATH = require('./rootpath.js');
var path = require('path');

module.exports = {
  entry: {
    'conf': './conf/index.js',
    'vendor': [
      'react','react-dom',
      'redux','react-redux','redux-thunk',
      'antd',
      'immutable',
      './scripts/vendor.js'
    ],
    'polyfills': './scripts/polyfills.js',
    'app': './scripts/main.js'
  },

  resolve: {
    extensions: ['', '.js'],
    root: [ROOT_PATH]
  },

  module: {
    loaders: [{
      test: /\.html$/,
      loader: 'html'
    }, {
      test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
      loader: 'file?name=assets/[name].[hash].[ext]'
    }, {
      test: /\.css$/,
      loader: "style!css"
    }, {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }, {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {compact: false}
    }]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor"]
    }),
    new HtmlWebpackPlugin({
      template: ROOT_PATH + '/index.html'
    })
  ]
};
