import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ParticleBackground from './ParticleBackground';
import './styles/AboutTimeline.css';

const AboutTimeline = ({ darkMode }) => {
  const timelineData = [
    {
      id: 1,
      date: "September 2025 - Present",
      title: "Service Desk Associate",
      subtitle: "Dalhousie University Information Technology Services",
      location: "Halifax, Nova Scotia",
      type: "work",
      description: "Part-time role providing technical support for campus computer labs and IT services"
    },
    {
      id: 2,
      date: "May 2025 - September 2025",
      title: "IT Technician - Co-op Internship", 
      subtitle: "Dalhousie University Information Technology Services",
      location: "Halifax, Nova Scotia",
      type: "work",
      description: "Deployed VMs, communicated with clients across departments, represented client needs"
    },
    {
      id: 3,
      date: "August 2025 - September 2025",
      title: "Project Placement Consultant",
      subtitle: "Experience Ventures – Arthur L. Irving Entrepreneurship Centre",
      location: "Halifax, Nova Scotia (Remote)",
      type: "work", 
      description: "Developed custom software for local business clients and delivered professional reports"
    },
    {
      id: 4,
      date: "September 2023",
      title: "Started University",
      subtitle: "Dalhousie University",
      location: "Halifax, Nova Scotia",
      type: "education",
      description: "Began Computer Science studies"
    },
    {
      id: 5,
      date: "November 2022",
      title: "Basketball Provincial Champion",
      subtitle: "High School Sports",
      location: "Prince Edward Island", 
      type: "achievement",
      description: "Won provincial basketball championship with my high school team"
    },
    {
      id: 6,
      date: "May 2022",
      title: "Canadian Chess Challenge",
      subtitle: "Grade 12 Representative", 
      location: "Prince Edward Island",
      type: "achievement",
      description: "Represented PEI at the Annual Canadian Chess Challenge for Grade 12"
    },
    {
      id: 7,
      date: "May 2021", 
      title: "Canadian Chess Challenge",
      subtitle: "Grade 11 Representative",
      location: "Prince Edward Island",
      type: "achievement",
      description: "Represented PEI at the Annual Canadian Chess Challenge for Grade 11"
    },
    {
      id: 8,
      date: "June 2019",
      title: "Canadian Chess Challenge", 
      subtitle: "Grade 9 Representative",
      location: "Prince Edward Island",
      type: "achievement",
      description: "Represented PEI at the Annual Canadian Chess Challenge for Grade 9"
    },
    {
      id: 9,
      date: "May 2018",
      title: "Canadian Chess Challenge",
      subtitle: "Grade 8 Representative", 
      location: "Prince Edward Island",
      type: "achievement",
      description: "Represented PEI at the Annual Canadian Chess Challenge for Grade 8"
    }
  ];

  const getIcon = (type) => {
    switch(type) {
      case 'work': return '💼';
      case 'education': return '🎓';
      case 'achievement': return '🏆';
      default: return '•';
    }
  };

  return (
    <div className={`about-timeline-container ${darkMode ? 'dark-mode' : ''}`}>
      <ParticleBackground />
      <Container className="pt-5">
        <Row className="justify-content-center">
          <Col lg={10} xl={8}>
            <header className="timeline-header text-center">
              <h1 className="timeline-title">My Timeline</h1>
              {/* <p className="timeline-subtitle">A timeline of key milestones and experiences</p> */}
              {/* <div className="view-toggle">
                <Link to="/about-original" className="toggle-link">
                  View Detailed About
                </Link>
              </div> */}
            </header>

            <div className="timeline">
              {timelineData.map((item, index) => (
                <div key={item.id} className={`timeline-item ${item.type}`}>
                  <div className="timeline-marker">
                    <span className="marker-icon">{getIcon(item.type)}</span>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-card">
                      <div className="card-glow"></div>
                      <div className="card-content">
                        <div className="timeline-date">{item.date}</div>
                        <h3 className="timeline-item-title">{item.title}</h3>
                        <h4 className="timeline-item-subtitle">{item.subtitle}</h4>
                        <div className="timeline-location">{item.location}</div>
                        <p className="timeline-description">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutTimeline;