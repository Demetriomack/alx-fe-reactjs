import React from 'react';

const BookCard = ({ book, onSelectBook }) => {
  const { title, authors, imageLinks } = book.volumeInfo;
  return (
    <div
      className="bg-white shadow-lg rounded-md p-4 hover:shadow-xl transition-shadow cursor-pointer"
      onClick={() => onSelectBook(book)}
    >
      <img
        src={imageLinks?.thumbnail || 'https://via.placeholder.com/150'}
        alt={title}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="text-lg font-bold mt-2">{title}</h3>
      <p className="text-gray-600">{authors?.join(', ')}</p>
    </div>
  );
};

export default BookCard;
