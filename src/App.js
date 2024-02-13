import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import './style/App.css'; // Import CSS file for styling

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch JSON data when the component mounts
    fetch('/projects.json')
      .then(response => response.json())
      .then(data => {
        // Set the fetched JSON data to state
        console.log(data);
        data.pop()
        setProjects(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <Router>
      <div className="app">
        <Header projects={projects} />
        <Routes>
          {/* Pass the JSON data as props to the child components */}
          <Route path="/" element={<LandingPage  />} />
          <Route path="/about" element={<AboutMe  />} />
          <Route path="/projects" element={<Projects projects={projects} />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
