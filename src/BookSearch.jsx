// src/components/BookSearch.js
import React, { useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

const BookSearch = ({ addToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const searchBooks = async (q) => {
    const response = await axios.get(`https://openlibrary.org/search.json?q=${q}&limit=10&page=1`);
    setBooks(response.data.docs);
  };

  const handleInputChange = (e) => {
    const q = e.target.value;
    setQuery(q);
    if (q) {
      searchBooks(q);
    } else {
      setBooks([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for books..."
      />
      <div className="book-results">
        {books.map((book) => (
          <BookCard key={book.key} book={book} addToBookshelf={addToBookshelf} />
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
