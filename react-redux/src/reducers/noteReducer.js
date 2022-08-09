export const noteReducer = (state = [], action) => {
  switch (action.type) {
    case '@notes/created':
      return [...state, action.payload];
    default:
      return state;
  }
};

const generateId = () => Math.floor(Math.random() * 999999999) + 1;

export const createNote = (content) => {
  return {
    type: '@notes/created',
    payload: {
      content,
      important: true,
      id: generateId(),
    },
  };
};
