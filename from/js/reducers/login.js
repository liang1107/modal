'use strict';

import * as ActionTypes from '../constants/ActionTypes';

const defaultState = {
    logining:false,
    logined:false,
    userInfo:{},
    authCode:'',
    registerData:{}
};

export default function main(state = defaultState, action) {
    state = Object.assign({}, state, {

    });

  switch (action.type) {
    case ActionTypes.LOGINING_RESULT:
      return Object.assign({}, state, {
          logining: true,
          logined: false
      });
    case ActionTypes.LOGINED_RESULT:
        localStorage.setItem("logined", true);
        localStorage.setItem("userInfo", JSON.stringify(action.rawData));
      return Object.assign({}, state, {
          logining:false,
          logined: true,
          userInfo:action.rawData
      });
      case ActionTypes.LOGOUT_RESULT:
          localStorage.setItem("logined", false);
          localStorage.setItem("userInfo", JSON.stringify({}));
          return Object.assign({}, state, {
              logined: false,
              userInfo:{}
          });
      case ActionTypes.GET_AUTHCODE_RESULT:
          return Object.assign({}, state, {
              authCode:action.rawData
          });
      case ActionTypes.REGISTER_RESULT:
          localStorage.setItem("logined", true);
          localStorage.setItem("userInfo", JSON.stringify(action.rawData));
          return Object.assign({}, state, {
              logined: true,
              userInfo:action.rawData,
              registerData:action.rawData
          });
    default:
      return state;
  }
}
