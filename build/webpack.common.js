var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var ROOT_PATH = require('./rootpath.js');
var path = require('path');

module.exports = {
  entry: {
    'react-redux-immutable': [
      'react', 'react-dom',
      'redux', 'react-redux', 'redux-thunk',
      'immutable'
    ],
    'conf': ['./conf/index.js'],
    'babel-polyfill': [
      'babel-polyfill'
    ],
    'app': './src/main.js'
  },

  resolve: {
    extensions: ['', '.js','.jsx'],
    root: [ROOT_PATH],
    alias:{
      methods$: 'src/3rd/methods/index.js',
      dragula$:'src/3rd/plugins/dragula/index.js'
    }
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
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: { compact: false }
    }]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ["babel-polyfill", "react-redux-immutable"]
    }),
    new HtmlWebpackPlugin({
      template: ROOT_PATH + '/src/index.html'
    })
  ]
};
