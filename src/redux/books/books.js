import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const FETCH_BOOKS = 'bookstore/books/FETCH_BOOKS';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/n5K1TxxntiM5OxDyEVnB/books/';

export const getAllBooks = createAsyncThunk(
  FETCH_BOOKS,
  async (post, { dispatch }) => {
    const resp = await fetch(URL);
    const data = await resp.json();
    const books = Object.keys(data).map((id) => ({
      ...data[id][0],
      item_id: id,
    }));
    dispatch({
      type: FETCH_BOOKS,
      payload: books,
    });
  },
);

export const add = createAsyncThunk(
  ADD,
  async (book, { dispatch }) => {
    await fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    });
    dispatch({
      type: ADD,
      payload: book,
    });
  },
);

export const remove = createAsyncThunk(
  REMOVE,
  async (id, { dispatch }) => {
    await fetch(`${URL}${id}`, {
      method: 'DELETE',
    });
    dispatch({
      type: REMOVE,
      payload: id,
    });
  },
);

const bookshow = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return [...state.filter((book) => book.item_id !== action.payload)];
    case FETCH_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export default bookshow;
