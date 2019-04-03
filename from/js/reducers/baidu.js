'use strict';

import * as ActionTypes from '../constants/ActionTypes';

const defaultState = {
    registerData:{}
};

export default function main(state = defaultState, action) {
    state = Object.assign({}, state, {

    });

  switch (action.type) {
   
      case ActionTypes.BAIDU:
          return Object.assign({}, state, {
              authCode:action.rawData
          });
     
    default:
      return state;
  }
}
