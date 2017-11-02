import React from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
const store = configureStore();

import { Router, Route, IndexRoute } from 'react-router'
import routes from '../constants/routes'

//或者 哈希路由
import { createHistory, createHashHistory, useBasename } from 'history';
// 此处用于添加根路径
const history = useBasename(createHashHistory)({
  queryKey: '_key',
  basename: '/blog-app'
});


export default React.createClass({
  showProvider(){
    return (
        <Provider store={store}>
          <Router history={history} routes={routes}/>
        </Provider>)
  },

  render() {
    if (process.env.NODE_ENV === 'production') {
      //release 正式版本
      return this.showProvider();
    } else {
      //debug 开发版本 /*{renderDevTools(store)}*/
      let {renderDevTools} = require('../utils/devTools');
      return (
        <div style={{height:'100%'}}>
            {this.showProvider()}
        </div>
      );
    }//{renderDevTools(store)}
  }
});
