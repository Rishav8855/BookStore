// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AddBook from './AddBook';
import Header from './Header';
import Footer from './Footer';
import './styles.css';
import Navigation from './Navigation';

const App = () => {
  const [books, setBooks] = useState([]);
  console.log(books);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="content-container">
           <div className="sidebar">
            <Navigation />
            <Routes>
              <Route path="/add" element={<AddBook addBook={addBook} />} />
              <Route path="/" element={<Home books={books} removeBook={removeBook} />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
