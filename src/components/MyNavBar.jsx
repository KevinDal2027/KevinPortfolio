import React, { useState } from "react";
import { Navbar, Nav, Form, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FaGithub, FaJava, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./styles/MyNavBar.css";

const MyNavbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  const handleToggle = () => {
    setExpanded(!expanded);
    if (!expanded) {
      document.getElementById("myNavbar").classList.remove("heightClosed");
    }
    if (expanded) {
      document.getElementById("myNavbar").classList.add("heightClosed");
    }
  };

  const Home = () => {
    if(expanded){
      return (<Nav.Link as={Link} to="/" className="fs-5" onClick={handleSelect}>HOME</Nav.Link>)
    }
  }

  const handleSelect = () => {
    setExpanded(false);
    document.getElementById("myNavbar").classList.add("heightClosed");
  };

  return (
    <Navbar
      bg={darkMode ? "dark" : "light"}
      variant={darkMode ? "dark" : "light"}
      expand="lg"
      sticky="top"
      expanded={expanded}
      id = "myNavbar"
      className="heightClosed"
    >
      <Container className="d-flex justify-content-between mt-auto">
        <Navbar.Brand as={Link} to="/" className="">
          <img
            src="./kevinLogo.svg"
            alt="Kevin Nguyen"
            width="100px"
            height="auto"
            style={{
              filter: darkMode ? 'invert(1)' : 'invert(0)',
            }}
            id = "myLogo"
          />
        </Navbar.Brand>
        <Form className="">
          <img
            src="./darkMode.svg"
            alt="Dark Mode"
            width="80px"
            height="auto"
            onClick={toggleDarkMode}
            style={{
              cursor: 'pointer',
              filter: darkMode ? 'invert(1)' : 'invert(0)',
            }}
            id = "dark-mode-icon"
          />
        </Form>
        <Navbar.Toggle aria-controls="responsive-navbar" onClick={handleToggle}>
           <img
            src={expanded ? "./expandedIcon.svg" : "./collapsedIcon.svg"}
            alt="Toggle"
            width="45px"
            height="auto"
            style={{
              filter: darkMode ? 'invert(1)' : 'invert(0)',
            }}
            id = "toggle-icon"
          />
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar" className="justify-content-end">
          <Nav>
            <Home />
            <Nav.Link as={Link} to="/about" className="fs-5 about-link" onClick={handleSelect}>ABOUT</Nav.Link>
            <Nav.Link as={Link} to="/projects" className="fs-5 about-link" onClick={handleSelect}>PROJECTS</Nav.Link>
            <Nav className="d-flex justify-content-center align-items-center ms-auto">
            <Nav.Link href="https://github.com/KevinDal2027" target="_blank" rel="noopener noreferrer" className="align-items-center">
            <FaGithub size={35}/>
            </Nav.Link>
            <Nav.Link href="https://linkedin.com/in/kevin-nguyen-dal" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={35} />
            </Nav.Link>
        </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;