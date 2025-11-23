import React, { useState, useEffect } from 'react';
import { Carousel, Card, Button, Collapse, Spinner, Modal } from 'react-bootstrap';
import { FaReact } from 'react-icons/fa';
import ParticleBackground from './ParticleBackground';
import './styles/Projects.css';
import projects from './projectData';
import { useNavigate, useLocation } from 'react-router-dom';

const Projects = ({ initialIndex = 0, onClose, isModalFromGallery }) => {
  const [open, setOpen] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [carouselIndex, setCarouselIndex] = useState(initialIndex);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [expandedDescription, setExpandedDescription] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setCarouselIndex(initialIndex);
  }, [initialIndex]);

  // On mount, check for ?project=ID and set carouselIndex
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const projectId = params.get('project');
    if (projectId) {
      const idx = projects.findIndex(p => p.id === projectId);
      if (idx !== -1) setCarouselIndex(idx);
    }
  }, [location.search]);

  useEffect(() => {
    // Simulate loading time for smoother transitions
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isModalFromGallery) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [isModalFromGallery]);

  const handleImageLoad = (imageId) => {
    setImagesLoaded(prev => ({ ...prev, [imageId]: true }));
  };

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

  const handleSelect = (selectedIndex) => {
    setCarouselIndex(selectedIndex);
    setOpen(null);
  };

  const toggleDescription = (projectId) => {
    setExpandedDescription(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const getDescriptionText = (project) => {
    const description = project.description;
    const charLimit = 100;
    if (isMobile && description.length > charLimit && !expandedDescription[project.id]) {
      return (
        <>
          {`${description.substring(0, charLimit)}... `}
          <Button
            variant="link"
            className="read-more-btn"
            onClick={() => toggleDescription(project.id)}
            style={{ color: '#00ff00', padding: 0, border: 'none' }}
          >
            Read More
          </Button>
        </>
      );
    } else if (isMobile && expandedDescription[project.id]) {
      return (
        <>
          {description}
          <Button
            variant="link"
            className="read-less-btn"
            onClick={() => toggleDescription(project.id)}
            style={{ color: '#00ff00', padding: 0, border: 'none' }}
          >
            Read Less
          </Button>
        </>
      );
    }
    return description;
  };

  // Use Modal for gallery pop-up to prevent jiggering
  if (isModalFromGallery) {
    return (
      <Modal
        show={true}
        onHide={onClose}
        centered
        size="lg"
        dialogClassName="projects-modal-content"
        contentClassName="bg-dark"
        backdropClassName="projects-modal-overlay"
        animation={true}
      >
        <Modal.Body style={{ padding: 0 }}>
          <Button
            className="close-button"
            variant="danger"
            style={{ position: 'absolute', top: 20, right: 20, zIndex: 100 }}
            onClick={onClose}
          >
            X
          </Button>
          <div className="projects-container">
            <div className="button-container">
              <Button
                variant="outline-light"
                className="back-to-gallery"
                onClick={() => navigate('/gallery')}
              >
                ← Back to Gallery
              </Button>
              <Button
                variant="outline-light"
                className="more-details-button"
                onClick={() => toggleCollapse(carouselIndex)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
              >
                <span style={{ fontSize: '1.3em', fontWeight: 'bold', color: '#ffd700', lineHeight: 1 }}>
                  i
                </span>
              </Button>
            </div>
            {loading ? (
              <div className="text-center py-5">
                <Spinner animation="border" variant="light" />
                <p className="text-white mt-3">Loading projects...</p>
              </div>
            ) : (
              <Carousel
                className="project-carousel"
                interval={null}
                indicators={false}
                activeIndex={carouselIndex}
                onSelect={handleSelect}
                slide={true}
              >
                {projects.map((project, idx) => (
                  <Carousel.Item key={project.id}>
                    <Collapse in={open === idx}>
                      <div className="project-details text-white p-3">
                        <Button
                          onClick={() => toggleCollapse(null)}
                          className="close-button"
                          variant="danger"
                        >
                          X
                        </Button>
                        <div className="theDescription">
                          <h4>Project Inspiration:</h4>
                          <p>{project.details?.inspiration}</p>
                          <h4>Project Timeline:</h4>
                          <p>{project.details?.timeline}</p>
                          <h4>Learning Experience:</h4>
                          <p>{project.details?.learning}</p>
                        </div>
                      </div>
                    </Collapse>
                    <Card className="project-card">
                      {!imagesLoaded[project.id] && (
                        <div className="image-loading-placeholder">
                          <Spinner animation="border" variant="light" size="sm" />
                        </div>
                      )}
                      <Card.Img
                        className="projectImg"
                        variant="top"
                        alt={project.title}
                        src={project.thumbnail}
                        onClick={() => toggleCollapse(idx)}
                        style={{
                          cursor: 'pointer',
                          display: imagesLoaded[project.id] ? 'block' : 'none',
                        }}
                        onLoad={() => handleImageLoad(project.id)}
                      />
                      <Card.Body>
                        <Card.Title
                          className="text-white fs-2 fw-bold"
                          onClick={() => toggleCollapse(idx)}
                          style={{ cursor: 'pointer' }}
                        >
                          {project.title}
                        </Card.Title>
                        <Card.Text className="text-white" style={{ fontSize: '1rem' }}>
                          {getDescriptionText(project)}
                          {project.skills && project.skills.length > 0 && (
                            <div
                              className={
                                project.skills.length === 11
                                  ? 'skillsWrap11 pb-5'
                                  : project.skills.length === 7
                                    ? 'skillsWrap7 pb-5'
                                    : project.skills.length === 6
                                      ? 'skillsWrap6 pb-5'
                                      : 'skills2 pt-4 d-flex justify-content-around'
                              }
                            >
                              {project.skills.map((skill, i) => (
                                <div
                                  key={i}
                                  className={
                                    project.skills.length === 11
                                      ? `item_11 item${i + 1}_11`
                                      : project.skills.length === 7
                                        ? `item_7 item${i + 1}`
                                        : project.skills.length === 6
                                          ? `item_6 item${i + 1}_6`
                                          : ''
                                  }
                                >
                                  <img alt={skill.alt} width="150px" src={skill.src} />
                                </div>
                              ))}
                            </div>
                          )}
                        </Card.Text>
                        <div className="visit-buttons">
                          {project.links?.website && (
                            <Button
                              className="visit-website"
                              variant="light"
                              href={project.links.website}
                              target="_blank"
                            >
                              View Website
                            </Button>
                          )}
                          {project.links?.github && (
                            <Button
                              className="visit-github"
                              variant="light"
                              href={project.links.github}
                              target="_blank"
                            >
                              View GitHub
                            </Button>
                          )}
                        </div>
                      </Card.Body>
                    </Card>
                  </Carousel.Item>
                ))}
              </Carousel>
            )}
          </div>
        </Modal.Body>
      </Modal>
    );
  }

  // Default (non-modal) rendering
  return (
    <div className="projects-section">
      <ParticleBackground />
      <div className="button-container">
        <Button
          variant="outline-light"
          className="back-to-gallery"
          onClick={() => navigate('/gallery')}
        >
          ← Back to Gallery
        </Button>
        <Button
          variant="outline-light"
          className="more-details-button"
          onClick={() => toggleCollapse(carouselIndex)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
        >
          <span style={{ fontSize: '1.3em', fontWeight: 'bold', color: '#ffd700', lineHeight: 1 }}>
            i
          </span>
        </Button>
      </div>
      <div className="projects-container">
        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" variant="light" />
            <p className="text-white mt-3">Loading projects...</p>
          </div>
        ) : (
          <Carousel
            className="project-carousel"
            interval={null}
            indicators={false}
            activeIndex={carouselIndex}
            onSelect={handleSelect}
            slide={true}
          >
            {projects.map((project, idx) => (
              <Carousel.Item key={project.id}>
                <Collapse in={open === idx}>
                  <div className="project-details text-white p-3">
                    <Button
                      onClick={() => toggleCollapse(null)}
                      className="close-button"
                      variant="danger"
                    >
                      X
                    </Button>
                    <div className="theDescription">
                      <h4>Project Inspiration:</h4>
                      <p>{project.details?.inspiration}</p>
                      <h4>Project Timeline:</h4>
                      <p>{project.details?.timeline}</p>
                      <h4>Learning Experience:</h4>
                      <p>{project.details?.learning}</p>
                    </div>
                  </div>
                </Collapse>
                <Card className="project-card">
                  {!imagesLoaded[project.id] && (
                    <div className="image-loading-placeholder">
                      <Spinner animation="border" variant="light" size="sm" />
                    </div>
                  )}
                  <Card.Img
                    className="projectImg"
                    variant="top"
                    alt={project.title}
                    src={project.thumbnail}
                    onClick={() => toggleCollapse(idx)}
                    style={{
                      cursor: 'pointer',
                      display: imagesLoaded[project.id] ? 'block' : 'none',
                    }}
                    onLoad={() => handleImageLoad(project.id)}
                  />
                  <Card.Body>
                    <Card.Title
                      className="text-white fs-2 fw-bold"
                      onClick={() => toggleCollapse(idx)}
                      style={{ cursor: 'pointer' }}
                    >
                      {project.title}
                    </Card.Title>
                    <Card.Text className="text-white" style={{ fontSize: '1rem' }}>
                      {getDescriptionText(project)}
                      {project.skills && project.skills.length > 0 && (
                        <div
                          className={
                            project.skills.length === 11
                              ? 'skillsWrap11 pb-5'
                              : project.skills.length === 7
                                ? 'skillsWrap7 pb-5'
                                : project.skills.length === 6
                                  ? 'skillsWrap6 pb-5'
                                  : 'skills2 pt-4 d-flex justify-content-around'
                          }
                        >
                          {project.skills.map((skill, i) => (
                            <div
                              key={i}
                              className={
                                project.skills.length === 11
                                  ? `item_11 item${i + 1}_11`
                                  : project.skills.length === 7
                                    ? `item_7 item${i + 1}`
                                    : project.skills.length === 6
                                      ? `item_6 item${i + 1}_6`
                                      : ''
                              }
                            >
                              <img alt={skill.alt} width="150px" src={skill.src} />
                            </div>
                          ))}
                        </div>
                      )}
                    </Card.Text>
                    <div className="visit-buttons">
                      {project.links?.website && (
                        <Button
                          className="visit-website"
                          variant="light"
                          href={project.links.website}
                          target="_blank"
                        >
                          View Website
                        </Button>
                      )}
                      {project.links?.github && (
                        <Button
                          className="visit-github"
                          variant="light"
                          href={project.links.github}
                          target="_blank"
                        >
                          View GitHub
                        </Button>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default Projects;