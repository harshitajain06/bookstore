const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

export const add = (payload) => ({
  type: ADD,
  payload,
});

export const remove = (payload) => ({
  type: REMOVE,
  id: payload,
});

const bookshow = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default bookshow;
