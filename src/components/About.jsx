import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import './styles/About.css';
import { Nav, Container, Row, Col, Card, Button, Collapse } from 'react-bootstrap';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = ({ darkMode }) => {
  const [showImages, setShowImages] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [openSection, setOpenSection] = useState('background');

  const toggleImages = (imagePath) => {
    setCurrentImage(imagePath);
    setShowImages(true);
  };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };


  const calculateDaysSince = (startDate) => {
    const start = new Date(startDate);
    const now = new Date();
    const diffTime = now - start;
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  };

  const days = calculateDaysSince('2018-08-01');

  const calculateYearsSince = (startDate) => {
    const start = new Date(startDate);
    const now = new Date();
    const diffTime = now - start;
    return Math.ceil(diffTime / (365000*60*60*24));
  };

  const year = calculateYearsSince('2018-08-01');

  const renderContent = () => {
    switch (openSection) {
      case 'background':
        return (
          <div className='about-content'>
            <p>
              Originally from Vietnam, I moved to Canada {year} years ago or {days} days ago, embracing new experiences that have shaped my growth. I've always been passionate about exploring new opportunities, learning new skills, and pushing my boundaries. Whether through technology, creative projects, or problem-solving, I thrive on challenges that help me grow and adapt.
            </p>
          </div>
        );
      case 'basketball':
        return (
          <div className='about-content'>
            <div className="image-trigger" onClick={() => toggleImages('./assets/lifestyles/basketball.png')}>
              <span className="clickable-text">View Basketball Photos</span>
              <FaChevronRight className="icon" />
            </div>
            <p>
              One of the first things I became passionate about was basketball. It not only gave me a love for the game but also taught me discipline, perseverance, and the right mindset to tackle challenges. The lessons I learned—like staying focused, pushing through setbacks, and constantly improving—are things I apply to many areas of my life, whether in academics, work, or personal growth.
            </p>
          </div>
        );
      case 'travel':
        return (
          <div className='about-content'>
            <div className="image-trigger" onClick={() => toggleImages('./assets/lifestyles/travel.png')}>
              <span className="clickable-text">View Travel Photos</span>
              <FaChevronRight className="icon" />
            </div>
            <p>
              I also love traveling, as it gives me the chance to explore new places, experience different cultures, and meet people from all walks of life. Whether it's visiting a new city, trying local food, or learning about different traditions, I enjoy the excitement of discovery and the connections I make along the way. Traveling has broadened my perspective, helping me appreciate diverse viewpoints and adapt to new environments.
            </p>
          </div>
        );
      case 'coding':
        return (
          <div className='about-content'>
            <div className="image-trigger" onClick={() => toggleImages('./assets/lifestyles/coding.png')}>
              <span className="clickable-text">View Hackathon Photos</span>
              <FaChevronRight className="icon" />
            </div>
            <p>
              Recently, I've developed a passion for hackathons! Every time I participate, I learn so much—not just about coding but also about problem-solving, collaboration, and thinking under pressure. Working with a team to build something from scratch in a short time is both exciting and challenging, pushing me to improve my technical skills while also learning how to communicate and adapt quickly.
            </p>
          </div>
        );
      case 'chess':
        return (
          <div className='about-content'>
            <div className="image-trigger" onClick={() => toggleImages('./assets/lifestyles/chess.png')}>
              <span className="clickable-text">View Chess & Music Photos</span>
              <FaChevronRight className="icon" />
            </div>
            <p>
              Aside from coding and basketball, I'm also really into chess and music. Chess has always been a great way for me to sharpen my strategic thinking and problem-solving skills, while music gives me an outlet for creativity and relaxation. Whether it's playing an instrument or just listening to different genres, music has a special way of inspiring me. Both activities provide balance in my life, allowing me to exercise my mind and express myself in unique ways.
            </p>
          </div>
        );
      case 'outdoor':
        return (
          <div className='about-content'>
            <div className="image-trigger" onClick={() => toggleImages('./assets/lifestyles/outside.png')}>
              <span className="clickable-text">View Outdoor Photos</span>
              <FaChevronRight className="icon" />
            </div>
            <p>
              Moreover, you'll often find me outdoors, skating around, sightseeing, or hunting down good food. I love getting outside, whether it's gliding on my skates through the city, taking in a new view, or trying out the latest food spot. It's the little things like these that keep life fun and spontaneous, and I always enjoy the chance to mix it up and experience something new.
            </p>
          </div>
        );
      case 'skills':
        return (
          <div className='about-content'>
            <p>
              Here are some of the skills I've developed over the years:
            </p>
            <ul>
              <li><strong>Languages</strong>: Java, Python, C and C#</li>
              <li><strong>Front-end Development</strong>: React, Folium, HTML/CSS/JavaScript, EJS, BootStrap, jQuery</li>
              <li><strong>Back-end Development</strong>: Node.js, Express.js, ASP.NET</li>
              <li><strong>Data Analytics</strong>: spaCy, numPy, Pandas, Matplotlib</li>
              <li><strong>Machine Learning</strong>: Scikit-learn / Linear Regression | Decision Tree, NLP</li>
              <li><strong>Work Procedural</strong>: AGILE, DevOps</li>
            </ul>
            <div className="cta-link">
              <Nav.Link as={Link} to="/projects" className="clickable-text">
                View more skills in Projects section
                <FaChevronRight className="icon" />
              </Nav.Link>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="about-container">
      <div id="aboutcontent">
        <div className={`about-page ${darkMode ? 'dark-mode' : ''}`}>
          <div className="sidebar">
            <button onClick={() => toggleSection('background')} className={openSection === 'background' ? 'active' : ''}>
              Background
            </button>
            <button onClick={() => toggleSection('basketball')} className={openSection === 'basketball' ? 'active' : ''}>
              Basketball
            </button>
            {/* <button onClick={() => toggleSection('travel')} className={openSection === 'travel' ? 'active' : ''}>
              Travel
            </button> */}
            <button onClick={() => toggleSection('coding')} className={openSection === 'coding' ? 'active' : ''}>
              Hackathons
            </button>
            <button onClick={() => toggleSection('chess')} className={openSection === 'chess' ? 'active' : ''}>
              Chess & Music
            </button>
            {/* <button onClick={() => toggleSection('outdoor')} className={openSection === 'outdoor' ? 'active' : ''}>
              Outdoor Activities
            </button> */}
            <button onClick={() => toggleSection('skills')} className={openSection === 'skills' ? 'active' : ''}>
              Skills
            </button>
          </div>
          <div className="content">
            <h1 className="text-center mb-4">About Me</h1>
            {renderContent()}
          </div>
        </div>
      </div>

      {showImages && (
        <div className="image-popup" onClick={() => setShowImages(false)}>
          <div className="image-gallery-popup">
            <LazyLoad height={200} offset={100}>
              <img src={currentImage} alt="Lifestyle" />
            </LazyLoad>
          </div>
          <button className="close-button" onClick={() => setShowImages(false)}>×</button>
        </div>
      )}
    </div>
  );
};

export default About;