import React from 'react';
import { useSelector } from 'react-redux';
import Book from './UI/Book';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Books;
