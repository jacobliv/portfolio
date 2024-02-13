// Header.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap'; // Import Dropdown from react-bootstrap
import './style/Header.css';

function Header({ projects }) {
    const location = useLocation();
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <header className="header-container">
            <div className="container">
                <div className="header-text">
                    <h1 className="header-logo">Jake Livingston</h1>
                    <nav className="header-nav">
                        <ul>
                            <li className={location.pathname === '/' ? 'active' : ''}><Link to="/">Home</Link></li>
                            <li className={location.pathname === '/about' ? 'active' : ''}><Link to="/about">About Me</Link></li>
                            <li 
                                className="header-nav-dropdown"
                                onMouseEnter={() => setShowDropdown(true)}
                                onMouseLeave={() => setShowDropdown(false)}
                            >
                                <Dropdown >
                                    <Dropdown.Header as={Link} variant="none" id="projects-dropdown">
                                        Projects
                                    </Dropdown.Header>
                                    <Dropdown.Menu onMouseLeave={() => setShowDropdown(false)}> {/* Close dropdown when mouse leaves */}
                                        {projects.map(project => (
                                            <Dropdown.Item key={project.name} href={`/projects/${project.name.replace(/\s/g, '')}`}>{project.name}</Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
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
