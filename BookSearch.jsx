import React, { useState } from 'react';
import { fetchBooks } from '../services/bookService';

const BookSearch = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    const results = await fetchBooks(query);
    setBooks(results);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Search for Books</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter book title or author..."
        className="border p-2 w-full rounded mb-4"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Search
      </button>
      <div className="mt-4">
        {books.length > 0 && (
          <ul>
            {books.map((book) => (
              <li key={book.id} className="border-b py-2">
                {book.volumeInfo.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BookSearch;
