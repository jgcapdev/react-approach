import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { composeWithDevTools } from 'redux-devtools-extension';

import { noteReducer } from './reducers/noteReducer';

import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(noteReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
