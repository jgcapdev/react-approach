import { ADD_NOTE, DELETE_NOTE } from './actionTypes';

const generateId = () => Math.floor(Math.random() * 999999999) + 1;

export const createNote = (content) => {
  return {
    type: ADD_NOTE,
    payload: {
      content,
      important: true,
      id: generateId(),
    },
  };
};

export const deleteNote = (id) => {
  return {
    type: DELETE_NOTE,
    payload: id,
  };
};
