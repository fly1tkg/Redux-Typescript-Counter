import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { CountReducer } from './CountReducer'
import createSagaMiddleware from 'redux-saga'
import mySaga from './saga'


const sagaMiddleware = createSagaMiddleware()

const store = createStore(CountReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(mySaga)

const renderApp = () =>
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root') as HTMLElement
  )

renderApp()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
