// src/AddBookForm.js
import React, { useState } from 'react';

const AddBookForm = ({ addBook }) => {
  const [title, setTitle] = useState('sd');
  const [author, setAuthor] = useState('rt');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const newBook = {
        id: Date.now(),
        title,
        author,
      };
      addBook(newBook);
      setTitle('');
      setAuthor('');
    } else {
      console.log('Please provide both title and author.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Author:
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </label>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookForm;
