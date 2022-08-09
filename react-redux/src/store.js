import { composeWithDevTools } from 'redux-devtools-extension';

import { noteReducer } from './redux/reducers/noteReducer';

import { createStore } from 'redux';

export const store = createStore(noteReducer, composeWithDevTools());
