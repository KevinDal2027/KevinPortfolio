import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import './styles/About.css';

const About = ({ darkMode }) => {
  const [showImages, setShowImages] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [openSection, setOpenSection] = useState('background');

  const toggleImages = (imagePath) => {
    setCurrentImage(imagePath);
    setShowImages(!showImages);
    document.getElementById("aboutcontent").classList.toggle("blurring");
  };

  const closeImages = () => {
    setShowImages(false);
    document.getElementById("aboutcontent").classList.remove("blurring");
  };

  const renderContent = () => {
    switch (openSection) {
      case 'background':
        return (
          <div>
            <p>
            Originally from Vietnam, I moved to Canada eight years ago, embracing new experiences that have shaped my growth. I've always been passionate about exploring new opportunities, learning new skills, and pushing my boundaries. Whether through technology, creative projects, or problem-solving, I thrive on challenges that help me grow and adapt.
            </p>
          </div>
        );
      case 'basketball':
        return (
          <div>
            <span className="clickable-text fs-2" onClick={() => toggleImages('./assets/lifestyles/basketball.png')}>Basketball</span>
            <p>
            One of the first things I became passionate about was basketball. It not only gave me a love for the game but also taught me discipline, perseverance, and the right mindset to tackle challenges. The lessons I learned—like staying focused, pushing through setbacks, and constantly improving—are things I apply to many areas of my life, whether in academics, work, or personal growth.
            </p>
          </div>
        );
      case 'travel':
        return (
          <div>
            <span className="clickable-text fs-2" onClick={() => toggleImages('./assets/lifestyles/travel.png')}>Travel</span>
            <p>
            I also love traveling, as it gives me the chance to explore new places, experience different cultures, and meet people from all walks of life. Whether it's visiting a new city, trying local food, or learning about different traditions, I enjoy the excitement of discovery and the connections I make along the way. Traveling has broadened my perspective, helping me appreciate diverse viewpoints and adapt to new environments.
            </p>
          </div>
        );
      case 'coding':
        return (
          <div>
            <span className="clickable-text fs-2" onClick={() => toggleImages('./assets/lifestyles/coding.png')}>Hackathons</span>
            <p>
              Recently, I've developed a passion for hackathons! Every time I participate, I learn so much—not just about coding but also about problem-solving, collaboration, and thinking under pressure. Working with a team to build something from scratch in a short time is both exciting and challenging, pushing me to improve my technical skills while also learning how to communicate and adapt quickly.
            </p>
          </div>
        );
      case 'chess':
        return (
          <div>
            <span className="clickable-text fs-2" onClick={() => toggleImages('./assets/lifestyles/chess.png')}>Chess & Music</span>
            <p>
              Aside from coding and basketball, I’m also really into chess and music. Chess has always been a great way for me to sharpen my strategic thinking and problem-solving skills, while music gives me an outlet for creativity and relaxation. Whether it’s playing an instrument or just listening to different genres, music has a special way of inspiring me. Both activities provide balance in my life, allowing me to exercise my mind and express myself in unique ways.
            </p>
          </div>
        );
      case 'outdoor':
        return (
          <div>
            <span className="clickable-text fs-2" onClick={() => toggleImages('./assets/lifestyles/outside.png')}>Activities</span>
            <p>
            Moreover, you'll often find me outdoors, skating around, sightseeing, or hunting down good food. I love getting outside, whether it’s gliding on my skates through the city, taking in a new view, or trying out the latest food spot. It’s the little things like these that keep life fun and spontaneous, and I always enjoy the chance to mix it up and experience something new.
            </p>
          </div>
        );
      case 'skills':
        return (
          <div>
            <p>
              Here are some of the skills I've developed over the years: 
              <ul>
                <li>Java, Python, C and C#</li>
                <li>HTML/CSS/JavaScript, EJS, BootStrap, jQuery</li>
                <li>React, Node.js, Folium, Spacy, Pandas, Matplotlib</li>
                <li>Machine Learning, Data Analytics</li>
                <li>Web Developments, DevOps</li>
                <li>.NET Framework in C#</li>
              </ul>
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h3 className='fst-italic text-center'>Click on the links in each section to see images</h3>
      <div className={`about-page ${darkMode ? 'dark-mode' : ''}`}>
        <div className="sidebar">
          <button onClick={() => setOpenSection('background')} className={openSection === 'background' ? 'active' : ''}>Background</button>
          <button onClick={() => setOpenSection('basketball')} className={openSection === 'basketball' ? 'active' : ''}>Basketball</button>
          <button onClick={() => setOpenSection('travel')} className={openSection === 'travel' ? 'active' : ''}>Travel</button>
          <button onClick={() => setOpenSection('coding')} className={openSection === 'coding' ? 'active' : ''}>Hackathons</button>
          <button onClick={() => setOpenSection('chess')} className={openSection === 'chess' ? 'active' : ''}>Chess & Music</button>
          <button onClick={() => setOpenSection('outdoor')} className={openSection === 'outdoor' ? 'active' : ''}>Outdoor Activities</button>
          <button onClick={() => setOpenSection('skills')} className={openSection === 'skills' ? 'active' : ''}>Skills</button>
        </div>
        <div className="content">
          {renderContent()}
        </div>

        {showImages && (
          <div className="image-popup">
            <button className="close-button" onClick={() => closeImages()}>X</button>
            <div className="image-gallery">
              <LazyLoad height={200} offset={100}>
                <img src={currentImage} alt="Lifestyle" />
              </LazyLoad>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default About;