import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/book';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const authorChangeHandler = (e) => {
    setAuthor(e.target.value);
  };

  const addBookHandler = (e) => {
    e.preventDefault();
    dispatch(addBook({ id: uuidv4(), title, author }));
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={addBookHandler}>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          placeholder="Book title"
          onChange={titleChangeHandler}
        />
        <input
          type="text"
          id="author"
          name="author"
          value={author}
          placeholder="Book author"
          onChange={authorChangeHandler}
        />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;
