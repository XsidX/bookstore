import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookReducer from './books/book';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  books: bookReducer,
  categories: categoriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
