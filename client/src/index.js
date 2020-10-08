import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {  Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import rootReducer  from './reducers/VoxActReducer'


 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


