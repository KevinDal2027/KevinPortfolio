import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import { Container, Row, Col } from 'react-bootstrap';
import { FaUser, FaBasketballBall, FaCode, FaChess, FaMusic, FaGraduationCap } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ParticleBackground from './ParticleBackground';
import './styles/About.css';

const About = ({ darkMode }) => {
  const [showImages, setShowImages] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [flippedCards, setFlippedCards] = useState(new Set());
  const [years, setYears] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    const calculateTime = () => {
      const startDate = new Date('2019-09-01T00:00:00');
      const now = new Date();
      const diffTime = Math.abs(now.getTime() - startDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDays(diffDays);
      setYears(Math.floor(diffDays / 365));
    };
    calculateTime();

    const intervalId = setInterval(calculateTime, 1000 * 60 * 60 * 24); // Update daily
    return () => clearInterval(intervalId);
  }, []);

  const toggleImages = (imagePath) => {
    setCurrentImage(imagePath);
    setShowImages(true);
  };

  const handleCardClick = (index) => {
    setFlippedCards(prev => {
      const newFlipped = new Set(prev);
      if (newFlipped.has(index)) {
        newFlipped.delete(index);
      } else {
        newFlipped.add(index);
      }
      return newFlipped;
    });
  };

  const cards = [
    {
      title: "Background",
      icon: <FaUser />,
      content: `Originally from Vietnam, I moved to Canada ${years} years ago or ${days} days ago, embracing new experiences that have shaped my growth. I've always been passionate about exploring new opportunities, learning new skills, and pushing my boundaries.`,
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
    <div className={`about-container ${darkMode ? 'dark-mode' : ''}`}>
      <ParticleBackground />
      <div id="aboutcontent">
        <div className="about-page">
          {cards.map((card, index) => (
            <div
              className={`flashcard ${flippedCards.has(index) ? 'flipped' : ''}`}
              key={index}
              style={{ '--card-index': index }}
              onClick={() => handleCardClick(index)}
            >
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
                        className="clickable-text"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleImages(card.image);
                        }}
                      >
                        View Photos
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
            <img src={currentImage} alt="Lifestyle" />
          </div>
          <button className="close-button" onClick={() => setShowImages(false)}>×</button>
        </div>
      )}
    </div>
  );
};

export default About;