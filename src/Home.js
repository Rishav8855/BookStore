// src/Home.js
import React from 'react';
import BookList from './BookList';

const Home = ({ books, removeBook }) => {
  return (
    <div>
      <h2>Book List</h2>
      <div className="book-table">
        <div className="table-row">
          <div className="table-cell">Title</div>
          <div className="table-cell">Author</div>
          <div className="table-cell">Genre</div>
          <div className="table-cell">Description</div>
          <div className="table-cell">Language</div>
          <div className="table-cell">Publication Year</div>
          <div className="table-cell">Personal Remarks</div>
          <div className="table-cell">Actions</div>
        </div>
        <BookList books={books} removeBook={removeBook} />
      </div>
    </div>
  );
};

export default Home;
