import { combineReducers } from 'redux'
import loginReducer from './loginReducer';
import { registration } from './registerReducer';

export default combineReducers({
  registration,
  loginReducer
});