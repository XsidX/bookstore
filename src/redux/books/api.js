import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

const APP_ID = 'UwsSr34kkvnAVWQyG0sQ';

export const getBooks = createAsyncThunk('books/getBooks', async () => {
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

export const postBook = createAsyncThunk('books/postBook', async (book) => {
  const response = await fetch(`${BASE_URL}/apps/${APP_ID}/books`, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.text();
  return data;
});

export const deleteBook = createAsyncThunk('books/deleteBook', async (id) => {
  await fetch(`${BASE_URL}/apps/${APP_ID}/books/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
  });

  return id;
});
