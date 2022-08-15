import React from 'react';

const AddBook = () => (
  <div>
    <h2>ADD NEW BOOK</h2>
    <form>
      <input type="text" id="book-title" placeholder="Book title" />
      <input type="text" id="book-author" placeholder="Book author" />
    </form>
  </div>
);

export default AddBook;
