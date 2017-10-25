var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './src/client'
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    rules: [
        {
            test: /\.jsx?$/,
            use: ['babel-loader',],
            exclude: /node_modules/
        },
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                //resolve-url-loader may be chained before sass-loader if necessary
                use: ['css-loader', 'sass-loader']
            })
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
              'file-loader'
            ]
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
              'file-loader'
            ]
        }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};

module.exports = config;