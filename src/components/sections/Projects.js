import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory, secure payments, and advanced analytics dashboard.',
      icon: 'fas fa-shopping-cart',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Project Management Hub',
      description: 'Collaborative workspace with real-time updates, file sharing, team chat, and advanced project tracking features.',
      icon: 'fas fa-tasks',
      technologies: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL', 'Redis'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Interactive data visualization platform with custom charts, real-time processing, and machine learning insights.',
      icon: 'fas fa-chart-line',
      technologies: ['Python', 'D3.js', 'Flask', 'TensorFlow', 'Docker'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects">
      <h2 className="section-title animate-on-scroll">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card animate-on-scroll">
            <i className={`${project.icon} project-icon`}></i>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.liveUrl} className="project-link">
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>
              <a href={project.githubUrl} className="project-link">
                <i className="fab fa-github"></i> Source
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
