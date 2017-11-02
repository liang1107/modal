var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  historyApiFallback: true
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/manager', function(req, res) {
    res.sendFile(path.join(__dirname, 'manager.html'));
});
//其它都指到index.html，即登录界面
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});
  
app.listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});

/*
'use strict';
//require('core-js/fn/object/assign');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    contentBase: './js/',
    historyApiFallback: true,
    hot: true,
    port: 3000,
    publicPath: '/static/',
    noInfo: false
  }
)
.listen(3000, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:3000');
});*/