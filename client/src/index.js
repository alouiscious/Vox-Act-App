import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import thunk from 'redux-thunk'
import { createStore, compose, applyMiddleware } from "redux";
import {  Provider } from 'react-redux'
import rootReducer  from './reducers/VoxActReducer'


const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


