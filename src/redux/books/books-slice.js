/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getBooks, postBook, deleteBook } from './api';

const initialState = {
  books: [],
  status: null,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook(state, action) {
      state.books.push(action.payload);
    },
    removeBook(state, action) {
      state.books = state.books.filter(
        (book) => book.item_id !== action.payload,
      );
    },
  },
  extraReducers: {
    [getBooks.pending]: (state) => {
      state.status = 'loading';
    },
    [getBooks.fulfilled]: (state, action) => {
      state.status = 'success';
      state.books = action.payload;
    },
    [getBooks.rejected]: (state) => {
      state.status = 'Fetching books failed';
    },
    [postBook.pending]: (state) => {
      state.status = 'Adding book...';
    },
  },
  [postBook.fulfilled]: (state, action) => {
    state.status = 'Book added';
    state.books.push(action.payload);
  },

  [postBook.rejected]: (state) => {
    state.status = 'Adding book failed';
  },
  [deleteBook.pending]: (state) => {
    state.status = 'Deleting book...';
  },
  [deleteBook.fulfilled]: (state, action) => {
    state.status = 'Book deleted';
    state.books = state.books.filter((book) => book.item_id !== action.payload);
  },
  [deleteBook.rejected]: (state) => {
    state.status = 'Deleting book failed';
  },
});

export const bookActions = bookSlice.actions;

export default bookSlice.reducer;
