import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaRobot } from "react-icons/fa";
import "./styles/MyNavBar.css";

const MyNavbar = ({ darkMode }) => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [clicked, setClicked] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggle = () => {
    setExpanded(!expanded);
    setClicked(true);
  };

  const handleSelect = () => {
    setExpanded(false);
    setClicked(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      className={`navbar-custom ${scrolled ? 'scrolled' : ''} ${darkMode ? 'dark' : 'light'} ${clicked ? 'clicked' : ''}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleSelect} className="brand">
          <img
            src="./signature.svg"
            alt="Kevin Nguyen"
            className="logo"
            style={{
              filter: darkMode ? 'invert(48%) sepia(95%) saturate(427%) hue-rotate(115deg) brightness(97%) contrast(101%)' : 'invert(0)',
            }}
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar"
          onClick={() => {
            handleToggle();
            setClicked(!clicked);
          }}
          className="custom-toggler"
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={handleSelect}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              onClick={handleSelect}
            >
              About
            </Nav.Link>
            {/* <Nav.Link 
              as={Link} 
              to="/experience" 
              className={`nav-link ${isActive('/experience') ? 'active' : ''}`}
              onClick={handleSelect}
            >
              Experience
            </Nav.Link> */}
            <Nav.Link
              as={Link}
              to="/gallery"
              className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}
              onClick={handleSelect}
            >
              Projects
            </Nav.Link>

            <div className="nav-icons">
              <a
                href="https://github.com/KevinDal2027"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon"
                onClick={handleSelect}
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/kevin-nguyen-dal"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon"
                onClick={handleSelect}
              >
                <FaLinkedin />
              </a>

              <a
                href="https://ai.kevinqh.com"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon"
                onClick={handleSelect}
              >
                <FaRobot />
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;