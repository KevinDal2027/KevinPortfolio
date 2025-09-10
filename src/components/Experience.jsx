import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/Experience.css';

const experiences = [
  {
    org: 'Dalhousie University Information Technology Services',
    role: 'Service Desk Associate – Part-time',
    location: 'Halifax, Nova Scotia',
    date: 'September 2025 - Present',
    bullets: [
      'Provided technical support and assistance for campus computer labs and IT services.',
      'Monitored systems through LabStats, reported issues, and performed basic troubleshooting.'
    ]
  },
  {
    org: 'Dalhousie University Information Technology Services',
    role: 'IT Technician - Co-op Internship',
    location: 'Halifax, Nova Scotia',
    date: 'May 2025 - September 2025',
    bullets: [
      'Deployed and configured Virtual Machines (VMs) for lab use and research by faculty and research assistants.',
      'Communicated with clients across multiple departments to gather technical requirements and deliver services on time.',
      'Participated in meetings with IT stakeholders and acted as liaison to represent client needs in technical discussions.'
    ]
  },
  {
    org: 'Experience Ventures – Arthur L. Irving Entrepreneurship Centre',
    role: 'Project Placement Consultant',
    location: 'Halifax, Nova Scotia (Remote)',
    date: 'August 2025 - September 2025',
    bullets: [
      'Engaged with a local business client to define project requirements and align solutions with organizational goals.',
      'Analyzed the client’s website, identifying usability, design, and performance improvements.',
      'Developed and implemented custom software tailored to the client’s operational needs.',
      'Delivered professional written reports summarizing findings, recommendations, and project outcomes.'
    ]
  }
];

const Experience = () => {
  return (
    <div className="experience-container" role="main" aria-labelledby="experience-heading">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <header className="experience-header text-center">
              <h1 id="experience-heading" className="display-5 fw-bold">Experience</h1>
              <p className="subtitle">A snapshot of roles, impact, and outcomes</p>
            </header>

            <ol className="timeline" role="list">
              {experiences.map((exp, idx) => (
                <li key={idx} className="timeline-item" tabIndex={0} aria-label={`${exp.role} at ${exp.org}, ${exp.date}`}>
                  <div className="dot" aria-hidden="true" />
                  <article className="card" aria-labelledby={`title-${idx}`}>
                    <div className="card-glow" aria-hidden="true" />
                    <div className="card-body">
                      <div className="card-meta">
                        <span className="date" aria-label="date">{exp.date}</span>
                        <span className="location" aria-label="location">{exp.location}</span>
                      </div>
                      <h2 id={`title-${idx}`} className="role">{exp.role}</h2>
                      <h3 className="org">{exp.org}</h3>
                      <ul className="bullets">
                        {exp.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Experience;


