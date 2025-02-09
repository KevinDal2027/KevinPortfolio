import React, {useState} from 'react';
import { Carousel, Card, Button, Collapse } from 'react-bootstrap';
import { FaReact } from 'react-icons/fa';
import './styles/Projects.css';

const Projects = () => {
  const [open, setOpen] = useState(null);
  
  const calculateDaysSince = (startDate) => {
    const start = new Date(startDate);
    const now = new Date();
    const diffTime = now - start;
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  };

  const realTime = calculateDaysSince('2025-02-06');

  const toggleCollapse = (index) => {
    setOpen(open === index ? null : index);
  };
  return (
    <div className="projects-container">
      <Carousel className="project-carousel" interval={null}>
        <Carousel.Item >
           <Collapse in={open === 0}>
              <div className="project-details text-white p-3">
                <Button
                  onClick={() => toggleCollapse(null)}
                  class="close-button"
                  variant="danger"
                >
                  X
                </Button>
                <div class ="theDescription">
                  <h4>Project Inspiration:</h4>
                  <p>
                    ChemAR was created to make chemistry interactive and engaging by visualizing molecules in 3D, helping students explore complex structures intuitively.
                  </p>
                  <h4>Project Timeline:</h4>
                  <p>
                    From September to December 2024, I collaborated as a junior developer with a team of senior and junior developers, guided by our Development Director.
                  </p>
                  <h4>Learning Experience:</h4>
                  <p>
                    This project enhanced my technical skills and taught me valuable collaboration and communication techniques for future endeavors.
                  </p>
                </div>
              </div>
            </Collapse>
          <Card className="project-card">
            <Card.Img class = "projectImg" id = "chemARpng" variant="top" alt ="ChemAR png" src="src/assets/projectThumbnails/ChemAR.png" onClick={() => toggleCollapse(0)} style={{ cursor: 'pointer', display : "none" }}/>
            <Card.Img class = "projectImg" id = "chemARgif" variant="top" alt ="ChemAR gif" src="src/assets/projectThumbnails/ChemAR.gif" onClick={() => toggleCollapse(0)} style={{ cursor: 'pointer' }}/>
            <Card.Body>
              <Card.Title className="text-white fs-2 fw-bold" onClick={() => toggleCollapse(0)} style={{ cursor: 'pointer' }}>ChemAR</Card.Title>
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
              <Button className="w-50 mb-4 mt-1 mx-auto d-block" variant="light" href="https://dalchemar.azurewebsites.net/" target="_blank">
                View Website
              </Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Collapse in={open === 0}>
              <div className="project-details text-white p-3">
                <Button
                  onClick={() => toggleCollapse(null)}
                  class="close-button"
                  variant="danger"
                >
                  X
                </Button>
                <div class ="theDescription">
                  <h4>Project Inspiration:</h4>
                  <p>Emission Vision was inspired by the urgent need to explore innovative ways to mitigate CO2 emissions in Alberta. By leveraging the natural carbon-sequestering abilities of algae, we aimed to uncover potential solutions to environmental challenges.</p>
                  <h4>Project Timeline:</h4>
                  <p>This project was developed in October 2024 during the intense 48-hour NASA Space Apps Hackathon. I collaborated with four other team members, focusing on writing scripts, cleaning data, and developing backend mapping functionalities.</p>
                  <h4>Learning Experience:</h4>
                  <p>Throughout the project, I gained valuable insights into geospatial analysis and the power of collaboration under pressure. Working on data processing and backend development enhanced my technical skills and understanding of sustainable practices.</p>
                </div>
              </div>
            </Collapse>
          <Card className="project-card">
            <Card.Img class = "projectImg" id = "visionPNG" variant="top" alt ="Emission Vision png" src="src/assets/projectThumbnails/CO2Vision.png" onClick={() => toggleCollapse(0)} style={{ cursor: 'pointer', display : "none" }}/>
            <Card.Img
              variant="top"
              alt="Emission Vision gif"
              src="src/assets/projectThumbnails/CO2Vision.gif"
              className="img-fluid" 
              style={{ maxHeight: '450px', objectFit: 'cover', cursor: 'pointer' }}
              onClick={() => toggleCollapse(0)}
              id = "visionGIF"
            />
             <Card.Body>
              <Card.Title className="text-white fs-2 fw-bold" onClick={() => toggleCollapse(0)} style={{ cursor: 'pointer' }}>Emission Vision (Algae Correlation)</Card.Title>
              <Card.Text className="text-white" style={{ fontSize: '1rem' }}>
              This project maps algal growth against CO2 emissions in Alberta to identify spatial correlations and trends.
               By leveraging geospatial data, it provides insights into algae's potential role in carbon sequestration, 
               supporting environmental research and policy development.
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
                  <Button className="w-50 mb-4 mt-1" variant="light" href="https://algaeandco2.vercel.app/" target="_blank">
                    View Website
                  </Button>
                  <Button className="w-50 mb-4 mt-1" variant="light" href="https://github.com/KevinDal2027/communitymappingNASAHackathon2024" target="_blank">
                    Visit on GitHub
                  </Button>
                </div>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item >
          <Collapse in={open === 0}>
              <div className="project-details text-white p-3">
                <Button
                  onClick={() => toggleCollapse(null)}
                  class="close-button"
                  variant="danger"
                >
                  X
                </Button>
                <div class ="theDescription">
                  <h4>Project Inspiration:</h4>
                  <p>As university students, we face some of the most stressful challenges: applying for jobs, studying for exams, and managing tight assignment deadlines. These pressures made us resonate with the topic of stress. We wanted to create something that could make our lives easier by saving us time, helping us structure our days, and ultimately reducing stress as much as possible.</p>
                  
                  <h4>Project Timeline:</h4>
                  <p>Developed in January 2025 during the 48-hour GenAI Hackathon and collaborated in a team of 5.</p>
                  
                  <h4>Accomplishments:</h4>
                  <p>Implemented speech-to-text, detailed subtasks, and Google Calendar integration with OAuth. We learned prompt engineering, data cleaning, React, and API usage.</p>
                  
                  <h4>What's Next:</h4>
                  <p>Plan to add weekly scheduling, stress pattern analysis, and Outlook integration.</p>
                </div>
              </div>
            </Collapse>
          <Card className="project-card">
          <Card.Img variant="top" id = "clearCalSVG" alt ="ClearCalAI svg" src="src/assets/projectThumbnails/ClearCal.svg" onClick={() => toggleCollapse(0)} style={{ cursor: 'pointer',display: "none" }}/>
            <Card.Img variant="top" id = "clearCalGIF" alt ="ClearCalAI gif" src="src/assets/projectThumbnails/ClearCal.gif" onClick={() => toggleCollapse(0)} style={{ cursor: 'pointer' }}/>
            <Card.Body>
              <Card.Title className="text-white fs-2 fw-bold" onClick={() => toggleCollapse(0)} style={{ cursor: 'pointer' }}>ClearCal AI (Lesser Stress for Best)</Card.Title>
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
              <Button className="w-50 mb-4 mx-auto d-block" variant="light" href="https://github.com/KevinDal2027/genaihackathon" target="_blank">
                Visit on GitHub
              </Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item >
          <Collapse in={open === 0}>
              <div className="project-details text-white p-3">
                <Button
                  onClick={() => toggleCollapse(null)}
                  class="close-button"
                  variant="danger"
                >
                  X
                </Button>
                <div class ="theDescription">
                  <h4>Project Inspiration:</h4>
                  <p>I was in class with my friend when I heard the person next to me talking about Alexithymia. So I searched it up, Alexithymia is when a person has difficulty experiencing, identifying, and expressing emotions. Then I thought of an application that can detect what the emotion is based on the text.</p>
                  
                  <h4>Project Timeline:</h4>
                  <p>Developed in December 2024 during one week as my side project.</p>
                  
                  <h4>Accomplishments:</h4>
                  <p>Implemented machine learning models (Linear Regression and DecisionTreeClassifier) to predict models, using NLP technique through spaCy.</p>
                  
                  <h4>What's Next:</h4>
                  <p>I am planning to add emotion recognition through speech as well. Then validatation with AI for accurate emotion.</p>
                </div>
              </div>
            </Collapse>
          <Card className="project-card">
            <Card.Img variant="top" alt ="Emotion Analysis gif" src="src/assets/projectThumbnails/Emotion.svg" onClick={() => toggleCollapse(0)} style={{ cursor: 'pointer' }}/>
            <Card.Body>
              <Card.Title className="text-white fs-2 fw-bold" onClick={() => toggleCollapse(0)} style={{ cursor: 'pointer' }}>Emotion Analysis and Prediction</Card.Title>
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
                  <Button className="w-50 mb-4 mt-1" variant="light" href="https://text-to-emotion-prediction-website.onrender.com/" target="_blank">
                    View Website
                  </Button>
                  <Button className="w-50 mb-4 mt-1" variant="light" href="https://github.com/KevinDal2027/TextToEmotionPredictionModel" target="_blank">
                    Visit on GitHub
                  </Button>
                </div>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item >
          <Collapse in={open === 0}>
              <div className="project-details text-white p-3">
                <Button
                  onClick={() => toggleCollapse(null)}
                  class="close-button"
                  variant="danger"
                >
                  X
                </Button>
                <div class ="theDescription">
                  <h4>Project Inspiration:</h4>
                  <p>In the Global Game Jam 2025, when the theme was published that we had to make a game based on "Bubble".
                    I thought, "Bubble?" close enough to Michael Buble. And it was snowing outside, so our plan was made. We executed the plan and made a game where you have to escape Michael Buble's bubble gum factory.
                  </p>
                  
                  <h4>Project Timeline:</h4>
                  <p>Developed in January 2025 during the 48 hours Global Game Jam in a team of 3.</p>

                  <h4>What I Learned:</h4>
                  <p>That was my first time actually making a game. Although, I had to learn C# to make game mechanic scripts, it was very easy to pick up since it is so similar to Java. I had so much fun designing meshes and animations.</p>
                </div>
              </div>
            </Collapse>
          <Card className="project-card">
          <Card.Img variant="top" id = "bublePNG"alt ="Escape Room png" src="src/assets/projectThumbnails/buble.png" onClick={() => toggleCollapse(0)} style={{ cursor: 'pointer',display: "none" }}/>
          <Card.Img variant="top" id = "bubleGIF"alt ="Escape Room gif" src="src/assets/projectThumbnails/buble.gif" onClick={() => toggleCollapse(0)} style={{ cursor: 'pointer' }}/>
            <Card.Body>
              <Card.Title className="text-white fs-2 fw-bold" onClick={() => toggleCollapse(0)} style={{ cursor: 'pointer' }}>Escape Room (Global Game Jam 2025)</Card.Title>
              <Card.Text className="text-white" style={{ fontSize: '1rem' }}>
              Escape Michael Bublé’s bubble gum factory in this quirky Unity game! Use bubble gum to float, dodge hazards, and reach the exit before running out or getting caught.
              <div class="skills2" className="pt-4 d-flex justify-content-around">
                  <div><img alt="Unity icon" width="150px" src="src/assets/skills/unity.svg" /></div>
                  <div><img alt="C# icon" width="150px" src="src/assets/skills/CSharp.svg" /></div>
                </div>
              </Card.Text>
              <div className="d-flex justify-content-center gap-2">
                  <Button className="w-50 mb-4 mt-1" variant="light" href="https://perfectoctogon.itch.io/escape-michael-bubles-bubblegum-factory" target="_blank">
                    Play Game Now
                  </Button>
                  <Button className="w-50 mb-4 mt-1" variant="light" href="https://github.com/KevinDal2027/GlobalGamejam2025" target="_blank">
                    Visit on GitHub
                  </Button>
                </div>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item >
          <Collapse in={open === 0}>
              <div className="project-details text-white p-3">
                <Button
                  onClick={() => toggleCollapse(null)}
                  class="close-button"
                  variant="danger"
                >
                  X
                </Button>
                <div class ="theDescription">
                  <h4>Project Inspiration:</h4>
                  <p>It was the summer of 2024, on a hot sunny day. I was not going to go outside in that heat.
                    So I told myself "let's just stay inside". Then I realized I was literally doing nothing. So I thought, 
                    "Stop sitting still and make a project". And as a first-year, I thought making a project is going to be so fun, so a simple Weather App it was.
                  </p>
                  
                  <h4>Project Timeline:</h4>
                  <p>Developed in May 2024 during the 2 weeks (some days with 4-5 hours of sleep) :((</p>

                  <h4>What I Learned:</h4>
                  <p>That was my first time actually making a project in Java. I learned so much about different types of Java Framework and having to play around with .NET was really fascinating.</p>
                </div>
              </div>
            </Collapse>
          <Card className="project-card">
            <Card.Img variant="top" alt ="Weather App gif" src="src/assets/projectThumbnails/Weather.gif" onClick={() => toggleCollapse(0)} style={{ cursor: 'pointer' }}/>
            <Card.Body>
              <Card.Title className="text-white fs-2 fw-bold" onClick={() => toggleCollapse(0)} style={{ cursor: 'pointer' }}>Weather App</Card.Title>
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
              <Button className="w-50 mb-4 mx-auto d-block" variant="light" href="https://github.com/KevinDal2027/WeatherAppJava" target="_blank">
                Visit on GitHub
              </Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item >
          <Collapse in={open === 0}>
              <div className="project-details text-white p-3">
                <Button
                  onClick={() => toggleCollapse(null)}
                  class="close-button"
                  variant="danger"
                >
                  X
                </Button>
                <div class ="theDescription">
                  <h4>Project Inspiration:</h4>
                  <p>Literally everyone had a website to show off their projects. So I thought, "I should make one too". And here we are.
                  </p>
                  
                  <h4>Project Timeline:</h4>
                  <p>I think I started February 6, 2025 so it's been {realTime} days from now actually.</p>

                  <h4>What I Learned:</h4>
                  <p>Making a website about yourself professionally is kinda fun! I get to be so CREATIVEEEE!!!</p>
                </div>
              </div>
            </Collapse>
          <Card className="project-card">
            <Card.Img variant="top" alt ="ChemAR gif" src="src/assets/projectThumbnails/KEVINWEB.svg" onClick={() => toggleCollapse(0)} style={{ cursor: 'pointer' }}/>
            <Card.Body>
              <Card.Title className="text-white fs-2 fw-bold" onClick={() => toggleCollapse(0)} style={{ cursor: 'pointer' }}>Portfolio Website</Card.Title>
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
              <Button className="w-50 mb-4 mx-auto d-block" variant="light" href="https://github.com/KevinDal2027/KevinPortfolio" target="_blank">
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