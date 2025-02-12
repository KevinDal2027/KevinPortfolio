import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import './styles/About.css';

const About = () => {
  const [showImages, setShowImages] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const toggleImages = (imagePath) => {
    setCurrentImage(imagePath);
    setShowImages(!showImages);
    document.getElementById("aboutcontent").classList.toggle("blurring");
  };

  const closeImages = () => {
    setShowImages(false);
    document.getElementById("aboutcontent").classList.remove("blurring");
  }
  return (
    <div className="d-flex flex-column container p-3 h-100">
      <h1 className='fw-bold text-center border border-5 rounded-bottom rounded-top'>About Me</h1>
      <div id='aboutcontent'>
        <div class = "overview country"> 
          <h4 className='fw-bold'>Background</h4>  
          <p>
            Originally from Vietnam, I moved to Canada about 8 years ago. 
            Most of my life, I have been passionate about trying new things and learn new skills.
            <br/>
            <div className="text-center fw-bold fs-3">
              <em>Also, click on those links to see images.</em>
            </div>
            
          </p>
        </div>
        <h4 className='fw-bold'>Hobbies</h4> 
        <div class = "section basketball">
          <p>
            One of the first thing that I grew so much passion for is &shy;
            <span className="clickable-text" onClick={() => toggleImages('./assets/lifestyles/basketball.png')}>basketball</span>, 
            and honestly basketball has taught me so much, it shaped my mindset and discipline that I now apply to many areas in my life. 
          </p>
        </div>

        <div class = "section travel">
          <p> 
            I also love &shy;
            <span className="clickable-text" onClick={() => toggleImages('./assets/lifestyles/travel.svg')}>traveling</span>, 
            discovering new places and meeting people from different backgrounds. There are so many places that I want to travel to, with the mindset that I can learn from everyone I meet.
          </p>
        </div>
        <div class = "section coding">
          <p>
            This is also some new passions I have developed recently. &shy;
            <span className="clickable-text" onClick={() => toggleImages('./assets/lifestyles/coding.svg')}>Hackathons</span> 
            ! I learned so much every time I participate in a hackathon, from coding to team work, and I am always looking forward to the next one.
          </p>
        </div>

        <div class = "section chess">
          <p>
            Aside coding and basketball, I love playing <span className="clickable-text" onClick={() => toggleImages('./assets/lifestyles/chess.png')}>chess and music</span>. I coached kids in chess below 14 years old when I was grade 8 until grade 10. I have had multiple 
            accomplishments (Major: Represented Team PEI twice for National Chess Tournament). I also play saxophone and clarinets, I used to be apart of my Senior High School Band where we won Gold in Atlantic Festival.
          </p>
        </div>

        <div class = "section outdoor">
          <p>
            Moreover, you can also find me doing things like &shy;
            <span className="clickable-text" onClick={() => toggleImages('./assets/lifestyles/outside.png')}>skating, sightseeing, eating...</span>.
          </p>
        </div>
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
  );
};

export default About;