import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex justify-between">
        <h1 className="text-xl font-bold">Book Library</h1>
        <div>
          <Link to="/" className="px-2 hover:underline">Home</Link>
          <Link to="/about" className="px-2 hover:underline">About</Link>
          <Link to="/search" className="px-2 hover:underline">Search</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
