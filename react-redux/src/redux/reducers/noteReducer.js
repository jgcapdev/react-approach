import { ADD_NOTE, DELETE_NOTE } from '../actionTypes.js';

export const noteReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.payload];
    case DELETE_NOTE:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};
