var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
      main:['whatwg-fetch',
          'eventsource-polyfill',
          'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
          './js/main.js'
      ],
      manager:['whatwg-fetch',
          'eventsource-polyfill',
          'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
          './js/manager.js'
      ]
  },
  output: {
    path: path.join(__dirname, 'static'),
    publicPath: '/static/',
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash:5].chunk.js',
    hot: true
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css')
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('css-loader') },
      { test: /\.(png|jpg|gif)$/, loader: 'file-loader?name=imgs/[name].[ext]' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
};
