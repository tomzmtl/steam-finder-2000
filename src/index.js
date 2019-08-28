import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import promise from 'es6-promise';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import 'isomorphic-fetch';
import * as serviceWorker from './common/serviceWorker';
import App from './components/App/container';
import reducer from './redux/reducer';
import './common/styles.scss';


promise.polyfill();

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
