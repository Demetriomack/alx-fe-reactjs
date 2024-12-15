import React from 'react';

const BookDetails = ({ book, onClose }) => {
  const { title, authors, description, publishedDate, imageLinks } = book.volumeInfo;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-4/5 md:w-1/2">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>
        <img
          src={imageLinks?.thumbnail || 'https://via.placeholder.com/150'}
          alt={title}
          className="w-full h-64 object-cover rounded"
        />
        <h2 className="text-2xl font-bold mt-4">{title}</h2>
        <p className="text-gray-600">By: {authors?.join(', ')}</p>
        <p className="text-gray-600 mt-2">Published: {publishedDate}</p>
        <p className="mt-4">{description}</p>
      </div>
    </div>
  );
};

export default BookDetails;
