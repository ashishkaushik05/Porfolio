/**
 * Projects.jsx
 * Portfolio projects section
 */

import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Real-Time Location Tracking App',
      description: 'Built using Express.js, Socket.IO, and Leaflet for live geolocation updates. Enabled real-time communication and map-based UI for tracking applications.',
      tech: ['Express.js', 'Socket.IO', 'Leaflet', 'Node.js'],
      github: 'https://github.com/ashishkaushik05'
    },
    {
      id: 2,
      title: 'Version Control System (C++)',
      description: 'Implemented Git-like system with skip list indexing for efficient file tracking and history management. Demonstrates deep understanding of data structures.',
      tech: ['C++', 'Algorithms', 'Data Structures'],
      github: 'https://github.com/ashishkaushik05'
    },
    {
      id: 3,
      title: 'Secure SMTP Server',
      description: 'Node.js SMTP server with TLS, SPF, DKIM, DMARC support. Deployable on AWS; showcases backend logic and email security protocols.',
      tech: ['Node.js', 'SMTP', 'TLS', 'AWS'],
      github: 'https://github.com/ashishkaushik05'
    }
  ];

  return (
    <div className="projects-section">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-tags">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tag">{tech}</span>
              ))}
            </div>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub →</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
