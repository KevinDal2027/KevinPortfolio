import React from 'react';
import projects from './projectData';
import ParticleBackground from './ParticleBackground';
import './styles/Projects.css';
import { useNavigate } from 'react-router-dom';

const ProjectsGallery = () => {
  const navigate = useNavigate();

  const handleThumbClick = (idx) => {
    const project = projects[idx];
    navigate(`/projects?project=${project.id}`);
  };

  return (
    <div className="projects-section">
      <ParticleBackground />
      <h2 className="gallery-header">Projects Gallery</h2>
      <div className="projects-container">
        <div className="gallery-grid">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="gallery-card project-card"
              onClick={() => handleThumbClick(idx)}
              tabIndex={0}
              role="button"
              style={{ cursor: 'pointer' }}
            >
              <div className="gallery-thumb-wrap">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="projectImg"
                  loading="lazy"
                />
                {project.tag && <span className="gallery-tag">{project.tag}</span>}
              </div>
              <div className="gallery-card-body">
                <h5 className="gallery-title text-white mb-1">{project.title}</h5>
                <div className="gallery-date text-muted">{project.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsGallery; 