import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {  Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from "redux";
import rootReducer  from './reducers/VoxActReducer'

import thunk from 'redux-thunk'

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)), /* preloadedState, */)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


