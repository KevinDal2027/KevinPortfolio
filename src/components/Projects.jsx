import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import { FaReact } from 'react-icons/fa';
import './styles/Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="text-center text-white">Projects</h1>
      <Carousel className="project-carousel" interval={null}>
        <Carousel.Item >
          <Card className="project-card">
            <Card.Img variant="top" alt ="ChemAR gif" src="src/assets/projectThumbnails/ChemAR.gif" />
            <Card.Body>
              <Card.Title className="text-white fs-2 fw-bold">ChemAR</Card.Title>
              <Card.Text className="text-white" style={{ fontSize: '1rem' }}>
              ChemAR is a tool that helps students and educators explore complex molecular structures in an interactive AR environment, making chemistry concepts more accessible and engaging. It enhances learning by visualizing molecules in 3D, bridging the gap between theory and practice.
              <div class = "skillsWrap7" className='pb-5'>
                 <div class = "item_7 item1"><img alt = "NodeJS icon" width= "150px" src='src/assets/skills/NodeJS.svg' /></div>
                 <div class = "item_7 item2"><img alt = "ThreeJS icon" width= "150px" src='src/assets/skills/ThreeJS.svg' /></div>
                 <div class = "item_7 item3"><img alt = "EJS icon" width= "150px" src='src/assets/skills/EJS.svg' /></div>
                 <div class = "item_7 item4"><img alt = "jQuery icon" width= "150px" src='src/assets/skills/jQuery.svg' /></div>
                 <div class = "item_7 item5"><img alt = "Agile icon" width= "150px" src='src/assets/skills/Agile.svg' /></div>
                 <div class = "item_7 item6"><img alt = "REST icon" width= "150px" src='src/assets/skills/REST.svg' /></div>
                 <div class = "item_7 item7"><img alt = "JIRA icon" width= "150px" src='src/assets/skills/JIRA.svg' /></div>
               </div>
              </Card.Text>
              <Button className="w-25 mb-4 mt-1 mx-auto d-block" variant="light" href="https://dalchemar.azurewebsites.net/" target="_blank">
                View Website
              </Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="project-card">
            <Card.Img
              variant="top"
              alt="Emission Vision gif"
              src="src/assets/projectThumbnails/CO2Vision.gif"
              className="img-fluid" // Bootstrap class to make the image responsive
              style={{ maxHeight: '450px', objectFit: 'cover' }} // Custom styles
            />
            <Card.Body>
              <Card.Title className="text-white fs-2 fw-bold">Emission Vision (Algae Correlation)</Card.Title>
              <Card.Text className="text-white" style={{ fontSize: '1rem' }}>
              This project analyzes the relationship between algal growth and CO2 emissions in Alberta to explore carbon sequestration potential.
                <div class="skillsWrap6" className="pb-5">
                  <div class="item_6 item1_6"><img alt="Python icon" width="150px" src="src/assets/skills/Python.svg" /></div>
                  <div class="item_6 item2_6"><img alt="Flask icon" width="150px" src="src/assets/skills/Flask.svg" /></div>
                  <div class="item_6 item3_6"><img alt="Folium icon" width="150px" src="src/assets/skills/Folium.svg" /></div>
                  <div class="item_6 item4_6"><img alt="mySQL icon" width="150px" src="src/assets/skills/mySQL.svg" /></div>
                  <div class="item_6 item5_6"><img alt="Bootstrap icon" width="150px" src="src/assets/skills/Bootstrap.svg" /></div>
                  <div class="item_6 item6_6"><img alt="JSON icon" width="150px" src="src/assets/skills/JSON.svg" /></div>
                </div>
              </Card.Text>
                <div className="d-flex justify-content-center gap-2">
                  <Button className="w-25 mb-4 mt-1" variant="light" href="https://algaeandco2.vercel.app/" target="_blank">
                    View Website
                  </Button>
                  <Button className="w-25 mb-4 mt-1" variant="light" href="https://github.com/KevinDal2027/communitymappingNASAHackathon2024" target="_blank">
                    Visit on GitHub
                  </Button>
                </div>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item >
          <Card className="project-card">
            <Card.Img variant="top" alt ="ClearCalAI gif" src="src/assets/projectThumbnails/ClearCal.gif" />
            <Card.Body>
              <Card.Title className="text-white fs-2 fw-bold">ClearCal AI (Lesser Stress for Best)</Card.Title>
              <Card.Text className="text-white" style={{ fontSize: '1rem' }}>
              ClearCal AI is an intelligent task manager that automates scheduling with AI and Google Calendar integration, 
              reducing user's stress by helping them manage their time more effectively.
              It features speech-to-text input to generate detailed action plans to streamline productivity. 
              <div class = "skillsWrap7" className='pb-5'>
                 <div class = "item_7 item1"><img alt = "React icon" width= "150px" src='src/assets/skills/React.js.svg' /></div>
                 <div class = "item_7 item2"><img alt = "NodeJS icon" width= "150px" src='src/assets/skills/NodeJS.svg' /></div>
                 <div class = "item_7 item3"><img alt = "Bootstrap icon" width= "150px" src='src/assets/skills/Bootstrap.svg' /></div>
                 <div class = "item_7 item4"><img alt = "JavaScript icon" width= "150px" src='src/assets/skills/JavaScript.svg' /></div>
                 <div class = "item_7 item5"><img alt = "Vite icon" width= "150px" src='src/assets/skills/Vite.svg' /></div>
                 <div class = "item_7 item6"><img alt = "GeminiAI icon" width= "150px" src='src/assets/skills/gemini.svg' /></div>
                 <div class = "item_7 item7"><img alt = "GoogleCalendar icon" width= "150px" src='src/assets/skills/GoogleCal.svg' /></div>
               </div>
              </Card.Text>
              <Button className="w-25 mb-4 mx-auto d-block" variant="light" href="https://github.com/KevinDal2027/genaihackathon" target="_blank">
                Visit on GitHub
              </Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item >
          <Card className="project-card">
            <Card.Img variant="top" alt ="Emotion Analysis gif" src="src/assets/projectThumbnails/Emotion.svg" />
            <Card.Body>
              <Card.Title className="text-white fs-2 fw-bold">Emotion Analysis and Prediction</Card.Title>
              <Card.Text className="text-white" style={{ fontSize: '1rem' }}>
              This emotion analysis and prediction project uses NLP techniques to analyze text and predict emotions with machine learning models. 
              It uses spaCy for processing, Matplotlib and pandas for visualization, and evaluates models like Linear Regression and Decision Trees for accuracy.
              <div class="skillsWrap6" className="pb-5">
                  <div class="item_6 item1_6"><img alt="Python icon" width="150px" src="src/assets/skills/Python.svg" /></div>
                  <div class="item_6 item2_6"><img alt="Flask icon" width="150px" src="src/assets/skills/Flask.svg" /></div>
                  <div class="item_6 item3_6"><img alt="Matplotlib icon" width="150px" src="src/assets/skills/matplotlib.svg" /></div>
                  <div class="item_6 item4_6"><img alt="Pandas icon" width="150px" src="src/assets/skills/Pandas.svg" /></div>
                  <div class="item_6 item5_6"><img alt="Scikit-learn icon" width="150px" src="src/assets/skills/scikit.svg" /></div>
                  <div class="item_6 item6_6"><img alt="Spacy icon" width="150px" src="src/assets/skills/Spacy.svg" /></div>
                </div>
              </Card.Text>
              <div className="d-flex justify-content-center gap-2">
                  <Button className="w-25 mb-4 mt-1" variant="light" href="https://text-to-emotion-prediction-website.onrender.com/" target="_blank">
                    View Website
                  </Button>
                  <Button className="w-25 mb-4 mt-1" variant="light" href="https://github.com/KevinDal2027/TextToEmotionPredictionModel" target="_blank">
                    Visit on GitHub
                  </Button>
                </div>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item >
          <Card className="project-card">
            <Card.Img variant="top" alt ="Escape Room gif" src="src/assets/projectThumbnails/buble.gif" />
            <Card.Body>
              <Card.Title className="text-white fs-2 fw-bold">Escape Room (Global Game Jam 2025)</Card.Title>
              <Card.Text className="text-white" style={{ fontSize: '1rem' }}>
              Escape Michael Bublé’s bubble gum factory in this quirky Unity game! Use bubble gum to float, dodge hazards, and reach the exit before running out or getting caught.
              <div class="skills2" className="pt-4 d-flex justify-content-around">
                  <div><img alt="Unity icon" width="150px" src="src/assets/skills/unity.svg" /></div>
                  <div><img alt="C# icon" width="150px" src="src/assets/skills/CSharp.svg" /></div>
                </div>
              </Card.Text>
              <div className="d-flex justify-content-center gap-2">
                  <Button className="w-25 mb-4 mt-1" variant="light" href="https://perfectoctogon.itch.io/escape-michael-bubles-bubblegum-factory" target="_blank">
                    Play Game Now
                  </Button>
                  <Button className="w-25 mb-4 mt-1" variant="light" href="https://github.com/KevinDal2027/GlobalGamejam2025" target="_blank">
                    Visit on GitHub
                  </Button>
                </div>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item >
          <Card className="project-card">
            <Card.Img variant="top" alt ="Weather App gif" src="src/assets/projectThumbnails/Weather.gif" />
            <Card.Body>
              <Card.Title className="text-white fs-2 fw-bold">Weather App</Card.Title>
              <Card.Text className="text-white" style={{ fontSize: '1rem' }}>
              A Java Swing GUI app that retrieves and displays real-time weather data from OpenWeatherAPI. It integrates JSON parsing and HTTP connection handling to ensure accurate and reliable weather updates, providing users with a seamless experience.
              <div class="skillsWrap6" className="pb-5">
                  <div class="item_6 item1_6"><img alt="Java icon" width="150px" src="src/assets/skills/Java.svg" /></div>
                  <div class="item_6 item2_6"><img alt="Java Swing icon" width="150px" src="src/assets/skills/Swing.svg" /></div>
                  <div class="item_6 item3_6"><img alt="Java Net icon" width="150px" src="src/assets/skills/Net.svg" /></div>
                  <div class="item_6 item4_6"><img alt="JSON icon" width="150px" src="src/assets/skills/JSON.svg" /></div>
                  <div class="item_6 item5_6"><img alt="OpenWeatherAPI icon" width="150px" src="src/assets/skills/openAPI.svg" /></div>
                  <div class="item_6 item6_6"><img alt="REST icon" width="150px" src="src/assets/skills/REST.svg" /></div>
                </div>
              </Card.Text>
              <Button className="w-25 mb-4 mx-auto d-block" variant="light" href="https://github.com/KevinDal2027/WeatherAppJava" target="_blank">
                Visit on GitHub
              </Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item >
          <Card className="project-card">
            <Card.Img variant="top" alt ="ChemAR gif" src="src/assets/projectThumbnails/KEVINWEB.svg" />
            <Card.Body>
              <Card.Title className="text-white fs-2 fw-bold">Portfolio Website</Card.Title>
              <Card.Text className="text-white" style={{ fontSize: '1rem' }}>
              Well... You are on it right now!!! I don't think I need description for this one. Check it out for yourself!!!
              Click on About to find out more about me, Projects to see my work, and maybe checkout my LinkedIn and GitHub.
              
              <div class = "skillsWrap7" className='pb-5'>
                 <div class = "item_7 item1"><img alt = "React JS icon" width= "150px" src='src/assets/skills/React.js.svg' /></div>
                 <div class = "item_7 item2"><img alt = "Bootstrap icon" width= "150px" src='src/assets/skills/Bootstrap.svg' /></div>
                 <div class = "item_7 item3"><img alt = "Vite icon" width= "150px" src='src/assets/skills/Vite.svg' /></div>
                 <div class = "item_7 item4"><img alt = "HTML icon" width= "150px" src='src/assets/skills/HTML.svg' /></div>
                 <div class = "item_7 item5"><img alt = "CSS icon" width= "150px" src='src/assets/skills/CSS.svg' /></div>
                 <div class = "item_7 item6"><img alt = "JavaScript icon" width= "150px" src='src/assets/skills/JavaScript.svg' /></div>
                 <div class = "item_7 item7"><img alt = "JIRA icon" width= "150px" src='src/assets/skills/JIRA.svg' /></div>
               </div>
              </Card.Text>
              <Button className="w-25 mb-4 mx-auto d-block" variant="light" href="https://github.com/KevinDal2027/KevinPortfolio" target="_blank">
                Visit on GitHub
              </Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Projects;