import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import './styles/About.css';

const About = () => {
  const [showImages, setShowImages] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const toggleImages = (imagePath) => {
    setCurrentImage(imagePath);
    setShowImages(!showImages);
  };

  return (
    <div className="container mt-5 d-flex align-items-center flex-column border border-2 border-dark p-3">
      <h1 className='text-center'>About Me</h1>
      <p className=''>
        Originally from Vietnam, I moved to Canada about 8 years ago. 
        Most of my life, I have been passionate about trying new things and learn new skills.
        <br/><br/><em>Also, try clicking on those links.
        </em>
        <br/><br/>
        One of the first thing that I grew so much passion for is &shy;
        <span className="clickable-text" onClick={() => toggleImages('./assets/lifestyles/basketball.svg')}>basketball</span>, 
        and honestly basketball has taught me so much, it shaped my mindset and discipline that I now apply to many areas in my life. 
        <br/><br/>I also love &shy;
        <span className="clickable-text" onClick={() => toggleImages('./assets/lifestyles/travel.svg')}>traveling</span>, 
        discovering new places and meeting people from different backgrounds. There are so many places that I want to travel to, with the mindset that I can learn from everyone I meet.
        <br/><br/>This is also some new passions I have developed recently. &shy;
        <span className="clickable-text" onClick={() => toggleImages('./assets/lifestyles/coding.svg')}>HACKATHONS!</span> 
        &shy; I learned so much everytime I participate in a hackathon, from coding to team work, and I am always looking forward to the next one.
        <br/><br/>When I'm not coding, you can find me doing things like skating, sightseeing, eating... &shy;
        <span className="clickable-text" onClick={() => toggleImages('./assets/lifestyles/outside.png')}>Outdoor</span>.
      </p>

      {showImages && (
        <div className="image-popup">
          <button className="close-button" onClick={() => setShowImages(false)}>X</button>
          <div className="image-gallery">
            <LazyLoad height={200} offset={100}>
              <img src={currentImage} alt="Lifestyle" />
            </LazyLoad>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;