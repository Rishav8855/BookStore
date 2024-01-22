// src/BookList.js
import React from 'react';

const BookList = ({ books, removeBook }) => {
  return (
    <div>
      {books.map((book) => (
        <div key={book.id} className="table-row">
          <div className="table-cell">{book.title}</div>
          <div className="table-cell">{book.author}</div>
          <div className="table-cell">{book.genre}</div>
          <div className="table-cell">{book.description}</div>
          <div className="table-cell">{book.language}</div>
          <div className="table-cell">{book.publicationYear}</div>
          <div className="table-cell">{book.personalRemarks}</div>
          <div className="table-cell">
            <button onClick={() => removeBook(book.id)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
