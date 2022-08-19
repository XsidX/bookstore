import React, { useState } from 'react';
import propTypes from 'prop-types';

import { useDispatch } from 'react-redux';
// import { bookActions } from '../../redux/books/books-slice';
import { deleteBook } from '../../redux/books/book';
import CircularProgressBar from './CircularProgressBar';
import ChapterCard from './ChapterCard';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const { item_id: id, title, author, category } = book;
  const [progress, setProgress] = useState(0);

  const removeBookHandler = (e) => {
    e.preventDefault();

    dispatch(deleteBook(id));
  };

  const progressHandler = (progress) => {
    setProgress(progress);
  };

  return (
    <div className="book-card">
      <div className="book-card-info">
        <h3 className="book-card-category">{category}</h3>
        <h2 className="book-card-title">{title}</h2>
        <p className="book-card-author">{author}</p>

        <div className="book-card-btns-wrapper">
          <button
            className="book-card-btns-wrapper-btn"
            type="button"
            onClick={removeBookHandler}
          >
            Comments
          </button>
          <button
            className="book-card-btns-wrapper-btn"
            type="button"
            onClick={removeBookHandler}
          >
            Remove
          </button>
          <button
            className="book-card-btns-wrapper-btn"
            type="button"
            onClick={removeBookHandler}
          >
            Edit
          </button>
        </div>
      </div>
      <CircularProgressBar id={id} progress={progress} />
      <ChapterCard id={id} progressHandler={progressHandler} />
    </div>
  );
};

Book.propTypes = {
  book: propTypes.shape({
    item_id: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    author: propTypes.string.isRequired,
    category: propTypes.string.isRequired,
  }).isRequired,
};

export default Book;
