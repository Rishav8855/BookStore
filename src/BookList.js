// src/BookList.js
import React from 'react';

const BookList = ({ books, removeBook }) => {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <strong>{book.title}</strong> by {book.author}
          <button onClick={() => removeBook(book.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
