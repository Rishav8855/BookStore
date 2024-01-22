// src/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer>
      {/* <p>&copy; {new Date().getFullYear()} Book Store</p> */}

      {/* Social media labels */}
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
      <div className="footer-copyright">
        <p>&copy; Evter Book Store - LA United States</p>
      </div>
    </footer>
  );
};

export default Footer;
