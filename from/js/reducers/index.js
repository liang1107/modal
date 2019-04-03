import { combineReducers } from 'redux';
import login from './login';
import baidu from "./baidu"
const rootReducer = combineReducers({
  login,
  baidu
}); 

export default rootReducer