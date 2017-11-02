import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers/index';

let createStoreWithMiddleware;

if (process.env.NODE_ENV === 'production') {
  createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
}else{
  let {devTools, persistState} = require('redux-devtools');
  createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(createStore);
}

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
