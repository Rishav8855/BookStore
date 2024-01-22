// src/AddBookForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBookForm = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('');
  const [publicationYear, setPublicationYear] = useState('');
  const [personalRemarks, setPersonalRemarks] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!title || !author || !genre) {
      console.log('Please provide title, author, and select a genre.');
      return;
    }

    const newBook = {
      id: Date.now(),
      title,
      author,
      genre,
      description,
      language,
      publicationYear,
      personalRemarks,
    };
    addBook(newBook);
    setTitle('');
    setAuthor('');
    setGenre('');
    setDescription('');
    setLanguage('');
    setPublicationYear('');
    setPersonalRemarks('');
    navigate('/');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <label>
          Author:
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </label>
        <label>
          Genre:
          <select value={genre} onChange={(e) => setGenre(e.target.value)} required>
            <option value="">Select Genre</option>
            <option value="Horror">Horror</option>
            <option value="Action and Adventure">Action and Adventure</option>
            <option value="Thriller">Thriller</option>
            <option value="Mystery">Mystery</option>
            <option value="Poetry">Poetry</option>
            <option value="Science Fiction">Science Fiction</option>
          </select>
        </label>
        <label>
          Description:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label>
        <label>
          Language:
          <input type="text" value={language} onChange={(e) => setLanguage(e.target.value)} required />
        </label>
        <label>
          Publication Year:
          <input type="text" value={publicationYear} onChange={(e) => setPublicationYear(e.target.value)} required />
        </label>
        <label>
          Personal Remarks:
          <input
            type="text"
            value={personalRemarks}
            onChange={(e) => setPersonalRemarks(e.target.value)}
            placeholder="Optional"
          />
        </label>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookForm;
