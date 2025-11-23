import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MyNavbar from './components/MyNavBar';
import Home from './components/Home';
import Projects from './components/Projects';
// import About from './components/About';
import ProjectsGallery from './components/ProjectsGallery';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import AboutTimeline from './components/AboutTimeline';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [galleryOpenProject, setGalleryOpenProject] = useState(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  // Handler to open the Projects carousel modal from the gallery
  const handleProjectClick = (idx) => {
    setGalleryOpenProject(idx);
  };
  // Handler to close the Projects modal
  const handleCloseProject = () => {
    setGalleryOpenProject(null);
  };

  return (
    <Router>
      <MyNavbar darkMode={darkMode} />
      <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/experience" element={<Experience />} /> */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutTimeline darkMode={darkMode} />} />
        <Route
          path="/gallery"
          element={
            <>
              <ProjectsGallery onProjectClick={handleProjectClick} />
              {galleryOpenProject !== null && (
                <Projects initialIndex={galleryOpenProject} onClose={handleCloseProject} isModalFromGallery />
              )}
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;