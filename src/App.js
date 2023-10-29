import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import MyImage from './components/MyImage'; 
import Skills from './components/Skills';
import Blogs from './components/Blogs';
import './App.css'; // Import a CSS file for styling
import Resume from './components/Resume'; // Import your Resume component
import LinkedIn from './components/LinkedIn'; 

function App() {
  return (
    <Router>
      <div>
        <Header />
        <MyImage /> 
        <nav className="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/experience" className="nav-link">Experience</Link>
            </li>
            <li className="nav-item">
              <Link to="/education" className="nav-link">Education</Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/skills" className="nav-link">Skills</Link>
            </li>
            <li className="nav-item">
              <Link to="/Blogs" className="nav-link">Blogs</Link>
            </li>
          </ul>
        </nav>
        <div className="additional-links">
 <Resume  /> 
<LinkedIn  />

  </div>
        
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Skills" element={<Skills/>} />
          <Route path="/Blogs" element={<Blogs/>} />
          
        </Routes>
        
      </div>
    </Router>

  );
}

export default App;
