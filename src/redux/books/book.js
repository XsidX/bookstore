import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const APP_ID = 'UwsSr34kkvnAVWQyG0sQ';

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';

const initialState = {
  books: [],
  status: null,
};

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case 'bookstore/books/GET_BOOKS/fulfilled':
      return {
        books: action.payload,
        status: 'Book list fetched successfully',
      };

    case 'bookstore/books/ADD/fulfilled':
      return {
        books: [...state.books, action.payload],
        status: 'Book added',
      };
    case 'bookstore/books/REMOVE/fulfilled':
      return {
        books: state.books.filter((book) => book.item_id !== action.payload),
        status: 'Book removed',
      };
    default:
      return state;
  }
}

export const getBooks = createAsyncThunk(GET_BOOKS, async () => {
  const response = await fetch(`${BASE_URL}/apps/${APP_ID}/books`);
  const data = await response.json();

  const keys = Object.keys(data);
  const arrayData = [];
  keys.map((key) => arrayData.push({
    item_id: key,
    title: data[key][0].title,
    author: data[key][0].author,
    category: data[key][0].category,
  }));

  return arrayData || [];
});

export const postBook = createAsyncThunk(ADD, async (book) => {
  await fetch(`${BASE_URL}/apps/${APP_ID}/books`, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return book;
});

export const deleteBook = createAsyncThunk(REMOVE, async (id) => {
  await fetch(`${BASE_URL}/apps/${APP_ID}/books/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
  });

  return id;
});
