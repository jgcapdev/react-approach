import { ADD_NOTE } from '../actionTypes.js';

export const noteReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.payload];
    default:
      return state;
  }
};
