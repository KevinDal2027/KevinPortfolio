import React, { useEffect, useRef } from 'react';
import { Nav, Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ParticleBackground from './ParticleBackground';
import './styles/Home.css';

const Home = () => {
  const imageRef = useRef(null);
  const [text, setText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [loopNum, setLoopNum] = React.useState(0);
  const [typingSpeed, setTypingSpeed] = React.useState(50);

  const roles = [
    "Computer Science @ Dalhousie University",
    "IT Technician @ Dalhousie ITS",
    "SDE @ Department of National Defence"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 20 : 50);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

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
    <div className="home-container position-relative">
      <ParticleBackground />
      <Container fluid>
        <Row className="justify-content-center" style={{ height: '100%', margin: 0 }}>
          <Col xs={12} lg={8} className="text-center">
            <div className="hero-content">
              <h1 className="display-4 fw-bold mb-4">
                <span className="highlight text-gradient">Kevin Nguyen</span>
              </h1>
              <div className="mb-3 typewriter-container" style={{ minHeight: '2rem' }}>
                <span className="typewriter fw-bold" style={{ color: 'var(--text-color)' }}>
                  {text}
                </span>
              </div>
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
                <a href="mailto:kv375322@dal.ca" className="social-link">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="scroll-indicator">
        <FaChevronDown />
      </div>
    </div>
  );
};

export default Home;