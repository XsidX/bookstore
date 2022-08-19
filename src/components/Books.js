import React from 'react';
import { useSelector } from 'react-redux';
import Book from './UI/Book';

const Books = () => {
  const books = useSelector((state) => state.books.books);

  return (
    <section className="books-container">
      {books.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
    </section>
  );
};

export default Books;
