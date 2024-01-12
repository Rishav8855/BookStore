// src/Home.js
import React from 'react';
import BookList from './BookList';

const Home = ({ books, removeBook, className }) => {
  return (
    <div className={`home-container ${className}`}>
      <h2>Book List</h2>
      <BookList books={books} removeBook={removeBook} />
    </div>
  );
};

export default Home;
