import React from 'react';
import propTypes from 'prop-types';

import { useDispatch } from 'react-redux';
// import { bookActions } from '../../redux/books/books-slice';
import { deleteBook } from '../../redux/books/book';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const { item_id: id, title, author } = book;

  const removeBookHandler = (e) => {
    e.preventDefault();

    dispatch(deleteBook(id));
  };
  return (
    <>
      <div>
        <h2>{title}</h2>
        <p>{author}</p>
      </div>
      <button type="button" onClick={removeBookHandler}>
        REMOVE BOOK
      </button>
    </>
  );
};

Book.propTypes = {
  book: propTypes.shape({
    item_id: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    author: propTypes.string.isRequired,
  }).isRequired,
};

export default Book;
