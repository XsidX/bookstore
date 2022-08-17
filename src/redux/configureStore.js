import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books-slice';
import categoriesReducer from './categories/categories-slice';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoriesReducer,
  },
});

export default store;
