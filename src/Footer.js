// Footer.js
import React from 'react';
import { FaLinkedin, FaItchIo } from 'react-icons/fa'; // Import icons from Font Awesome
import './style/Footer.css'; // Import CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2024 Jake Livingston. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/jacob-m-livingston/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://jakeliv.itch.io" target="_blank" rel="noopener noreferrer"><FaItchIo /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
