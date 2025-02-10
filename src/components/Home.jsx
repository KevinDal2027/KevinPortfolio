import React from 'react';
import { Navbar, Nav, Form, Container } from "react-bootstrap";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './styles/Home.css'; // Ensure you have a CSS file for styling

const Home = () => {
  return (
    <div className="home-container text-center">
      <h1>Hey, I'm <span className="highlight">Kevin Nguyen</span>.</h1>
      <p className="intro-text">
        I'm a second-year <span className='passion'>Computer Science</span> student at Dalhousie University, passionate about <span className='passion'>Data Science</span>, <span className='passion'>Machine Learning</span>, <span className='passion'>Software Development </span>and <span className='passion'>Full-Stack Development</span>.
      </p>
      <img src='./homeBG.png' alt="Background" className="home-image" />
      <p className="learn-more">Learn more about me...</p>
      <Nav.Link as={Link} to="/about" className="fs-5 about-link">ABOUT</Nav.Link>
      <p className="follow-me">
        or follow me on 
        <a href="https://linkedin.com/in/kevin-nguyen-dal" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaLinkedin />
        </a> 
        or 
        <a href="https://github.com/KevinDal2027" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaGithub />
        </a>
        or reach out to me at &shy;
        <a href="mailto:kevinhao710@Outlook.com" className="email-link">
          kevinhao710@outlook.com
        </a>
      </p>
    </div>
  );
};

export default Home;