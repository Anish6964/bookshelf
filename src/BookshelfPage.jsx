// src/pages/BookshelfPage.js
import React from 'react';
import Bookshelf from './Bookshelf';

const BookshelfPage = () => {
  return (
    <div>
      <h1>My Bookshelf</h1>
      <Bookshelf />
      <button onClick={() => window.location.href = '/'}>Back to Search</button>
    </div>
  );
};

export default BookshelfPage;
