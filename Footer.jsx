// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return <footer>
    <p>&copy; 2024 My App. All rights reserved.</p>
    </footer>;
};

export default Footer;
// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#f1f1f1',
    color: '#333',
    textAlign: 'center',
    padding: '10px 0',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 My App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
