var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  cache: false,
  entry: {
      main: './js/main.js',
      manager: './js/manager.js'
  },
  output: {
    path: path.join(__dirname, 'static'),
    publicPath: 'static',
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash:5].chunk.js',
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css')
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('css-loader') },
      { test: /\.(png|jpg|gif)$/, loader: 'file-loader?name=/imgs/[name].[ext]' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-redux': 'ReactRedux',
    'redux': 'Redux',
    'redux-thunk': 'ReduxThunk',
    'react-router': 'ReactRouter',
    'antd': 'antd',
  }
};
