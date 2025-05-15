import React from 'react';
import { Nav, Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="text-start">
            <div className="hero-content">
              <h1 className="display-4 fw-bold mb-4">
                Hey, I'm <span className="highlight">Kevin Nguyen</span>
              </h1>
              <p className="lead mb-4">
                I'm a second-year <span className="passion">Computer Science</span> student at Dalhousie University, passionate about <span className="passion">Data Science</span>, <span className="passion">Machine Learning</span>, <span className="passion">Software Development</span> and <span className="passion">Full-Stack Development</span>.
              </p>
              <div className="cta-buttons">
                <Nav.Link as={Link} to="/about" className="btn btn-primary me-3 aboutMeBtn">
                  About Me
                </Nav.Link>
                <Nav.Link as={Link} to="/projects" className="btn btn-primary projectsBtn">
                  View Projects
                </Nav.Link>
              </div>
              <div className="social-links mt-4">
                <a href="https://linkedin.com/in/kevin-nguyen-dal" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/KevinDal2027" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaGithub />
                </a>
                <a href="mailto:kevinhao710@Outlook.com" className="social-link">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} className="d-none d-lg-block">
            <div className="hero-image-container">
              <img src='./homeBG.jpeg' alt="Background" className="hero-image w-75" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;