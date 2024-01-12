// src/AddBook.js
import React from 'react';
import AddBookForm from './AddBookForm';

const AddBook = ({ addBook, className }) => {
  return (
    <div className={`add-book-container ${className}`}>
      <h2>Add a Book</h2>
      <AddBookForm addBook={addBook} />
    </div>
  );
};

export default AddBook;
