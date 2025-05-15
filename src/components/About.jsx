import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import './styles/About.css';
import { FaUser, FaBasketballBall, FaCode, FaChess, FaMusic, FaGraduationCap } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = ({ darkMode }) => {
  const [showImages, setShowImages] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const toggleImages = (imagePath) => {
    setCurrentImage(imagePath);
    setShowImages(true);
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

  const cards = [
    {
      title: "Background",
      icon: <FaUser />,
      content: `Originally from Vietnam, I moved to Canada ${year} years ago or ${days} days ago, embracing new experiences that have shaped my growth. I've always been passionate about exploring new opportunities, learning new skills, and pushing my boundaries.`,
      image: null
    },
    {
      title: "Basketball",
      icon: <FaBasketballBall />,
      content: "One of the first things I became passionate about was basketball. It not only gave me a love for the game but also taught me discipline, perseverance, and the right mindset to tackle challenges.",
      image: './assets/lifestyles/basketball.png'
    },
    {
      title: "Hackathons",
      icon: <FaCode />,
      content: "Recently, I've developed a passion for hackathons! Every time I participate, I learn so much—not just about coding but also about problem-solving, collaboration, and thinking under pressure.",
      image: './assets/lifestyles/coding.png'
    },
    {
      title: "Chess & Music",
      icon: <FaChess />,
      content: "Chess has always been a great way for me to sharpen my strategic thinking and problem-solving skills, while music gives me an outlet for creativity and relaxation.",
      image: './assets/lifestyles/chess.png'
    },
    {
      title: "Skills",
      icon: <FaGraduationCap />,
      content: (
        <>
          <ul>
            <li><strong>Languages</strong>: Java, Python, C and C#</li>
            <li><strong>Front-end</strong>: React, HTML/CSS/JavaScript, Bootstrap</li>
            <li><strong>Back-end</strong>: Node.js, Express.js, ASP.NET</li>
            <li><strong>Data & ML</strong>: spaCy, numPy, Pandas, Scikit-learn</li>
          </ul>
          <Link to="/projects" className="clickable-text">
            View Projects
          </Link>
        </>
      ),
      image: null
    }
  ];

  return (
    <div className="about-container">
      <div id="aboutcontent">
        <div className={`about-page ${darkMode ? 'dark-mode' : ''}`}>
          {cards.map((card, index) => (
            <div className="flashcard" key={index} style={{ '--card-index': index }}>
              <div className="flashcard-inner">
                <div className="flashcard-front">
                  <div className="flashcard-icon">{card.icon}</div>
                  <h2 className="flashcard-title">{card.title}</h2>
                  <p className="flashcard-content">Click to learn more</p>
                </div>
                <div className="flashcard-back">
                  <h2 className="flashcard-title">{card.title}</h2>
                  <div className="flashcard-content">
                    {card.content}
                    {card.image && (
                      <div 
                        className="image-trigger" 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleImages(card.image);
                        }}
                      >
                        <span className="clickable-text">View Photos</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
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