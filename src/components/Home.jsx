import React, { useEffect, useRef } from 'react';
import { Nav, Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ParticleBackground from './ParticleBackground';
import './styles/Home.css';

const Home = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const card = imageRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const tiltX = (y - centerY) / 25;
      const tiltY = -(x - centerX) / 25;

      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="home-container">
      <ParticleBackground />
      <Container fluid>
        <Row className="justify-content-center min-vh-100 pt-5">
          <Col xs={12} lg={8} className="text-center">
            <div className="hero-content">
              <h1 className="display-4 fw-bold mb-4">
                <span className="highlight">Kevin Nguyen</span>
              </h1>
              <p className="lead mb-4">
                <span className="d-none d-md-inline">
                  I'm a <span className="major">Computer Science</span> student at Dalhousie University, passionate to learn about <span className="passion">Machine Learning</span>, <span className="passion">Cloud Infrastructure</span>, and <span className="passion">Cyber Security</span>.
                </span>
                <span className="d-md-none">
                  I'm a <span className="major">Computer Science</span> student at Dalhousie University.
                </span>
                {/* <span className="passion">Full-Stack Development</span> and <span className="passion">Cloud Infrastructure</span>. */}
              </p>
              
              <div className="hero-image-container mb-4">
                <img 
                  ref={imageRef}
                  src='./homeBG.jpeg' 
                  alt="Kevin Nguyen" 
                  className="hero-image" 
                />
              </div>
              
              <div className="cta-buttons d-flex justify-content-center gap-3">
                <Nav.Link as={Link} to="/about" className="btn btn-primary aboutMeBtn mb-1">
                  About Me
                </Nav.Link>
                <Nav.Link as={Link} to="/gallery" className="btn btn-primary projectsBtn mb-1">
                  View Projects
                </Nav.Link>
              </div>
              <div className="social-links mt-4 d-flex justify-content-center">
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
        </Row>
      </Container>
    </div>
  );
};

export default Home;