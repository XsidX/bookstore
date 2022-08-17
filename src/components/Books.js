import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './UI/Book';
import { getBooks } from '../redux/books/api';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books) || [];

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div>
      {books.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
    </div>
  );
};

export default Books;
