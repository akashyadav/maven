import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux';
import RootReducer from './reducers/reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Provider} from 'react-redux';

const md = applyMiddleware(thunk,logger);
const store = createStore(RootReducer, md)
ReactDOM.render( <Provider store={store}> <App />  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
