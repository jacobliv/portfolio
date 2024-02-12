// Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation hook
import './style/Header.css'; // Import CSS file for styling

function Header() {
    const location = useLocation(); // Get the current location

  return (
    <header className="header-container">
      <div className="container">
        <div className="header-text">
        <h1 className="header-logo">Jake Livingston</h1>
        <nav className="header-nav">
            <ul>
                
              <li className={location.pathname === '/' ? 'active' : ''}><Link to="/">Home</Link></li>
              <li className={location.pathname === '/about' ? 'active' : ''}><Link to="/about">About Me</Link></li>

              <li className={location.pathname === '/projects' ? 'active' : ''}><Link to="/projects">Projects</Link></li>
              <li className={location.pathname === '/contact' ? 'active' : ''}><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
        <hr className="header-line" /> {/* Horizontal line element */}

      </div>
      

    </header>
  );
}

export default Header;
