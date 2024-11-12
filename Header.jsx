// src/components/Header.jsx
import React from 'react';

const Header = () => {
  const headerStyle = {
    backgroundColor: '#282c34',  // Dark background color
    color: 'white',             // White text color
    textAlign: 'center',        // Centered text
    padding: '20px',           // Padding for spacing
  };

  return (
    <header style={headerStyle}>
      <h1>Welcome to My App</h1>
    </header>
  );
};

export default Header;
