import { combineReducers } from 'redux';
import api from './api';
import additionalMenu from './additionalMenu';

export default combineReducers({
  api,
  additionalMenu
});