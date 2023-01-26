import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookshow from './books/books';
import category from './categories/categories';

const reducer = combineReducers({
  bookshow,
  category,
});

const store = configureStore({ reducer });
export default store;
