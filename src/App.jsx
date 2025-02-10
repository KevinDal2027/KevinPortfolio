import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MyNavbar from './components/MyNavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />}/>
      </Routes>
    </Router>
  );
}

export default App;