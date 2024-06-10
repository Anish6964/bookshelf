// src/pages/BookSearchPage.js
import React from 'react';
import BookSearch from './BookSearch';


const BookSearchPage = ({ addToBookshelf }) => {
  return (
    <div>
      <h1>Book Search</h1>
      <BookSearch addToBookshelf={addToBookshelf} />
      <button onClick={() => window.location.href = '/bookshelf'}>Go to My Bookshelf</button>
    </div>
  );
};

export default BookSearchPage;
