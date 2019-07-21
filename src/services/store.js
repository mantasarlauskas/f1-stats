import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import storageClient from './localStorage';
import { DRIVERS, TEAMS } from '../actions/favourites';

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  const logger = require('redux-logger').createLogger();
  middleware.push(logger);
}

const initialState = {
  favourites: {
    drivers: storageClient.get(DRIVERS),
    teams: storageClient.get(TEAMS)
  }
};

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;
