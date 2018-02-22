import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'

import "./index.css";
import App from './app';

const createStoreWithMiddleWare = applyMiddleware()(createStore);

ReactDOM.render(

    <App />

  , document.getElementById('root')
);
