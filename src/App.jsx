import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MyNavbar from './components/MyNavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <MyNavbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About darkMode={darkMode} />} />
      </Routes>
    </Router>
  );
}

export default App;