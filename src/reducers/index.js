import { combineReducers } from 'redux';
import api from './api';
import additionalMenu from './additionalMenu';
import favourites from './favourites';

export default combineReducers({
  api,
  favourites,
  additionalMenu
});
