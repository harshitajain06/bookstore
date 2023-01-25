const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

export const add = (title, author) => ({
  type: ADD,
  title,
  author,
});

export const remove = (id) => ({
  type: REMOVE,
  id,
});

const bookshow = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, { title: action.title, author: action.author }];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default bookshow;
