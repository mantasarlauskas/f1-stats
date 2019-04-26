import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './components/app';
import ScrollToTop from './components/scrollToTop/scrollToTop';
import loadImages from './imageLoader';

loadImages();

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  const logger = require('redux-logger').createLogger();
  middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
