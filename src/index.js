import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {connect, Provider} from 'react-redux' //imported provider from redux
import counterReducer from './reducers/counterReducer.js';
import App from './App';
import './index.css';

const store = createStore(
    counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); 

//provider was used to wrap into the React Application
//store was passed into Provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> /* code change */,
  document.getElementById("root")
);

