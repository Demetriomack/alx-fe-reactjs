import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery, onSearch }) => {
  return (
    <div className="p-4 bg-blue-500 text-white">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for books..."
        className="w-full p-2 rounded-md text-black"
      />
      <button
        onClick={onSearch}
        className="mt-2 bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
