import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './components/app';

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);