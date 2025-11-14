/**
 * Experience.jsx
 * Portfolio experience section
 */

import React from 'react';

const Experience = () => {
  const experience = [
    {
      id: 1,
      title: 'Tech Stack Manager',
      company: 'The Leazzy Company',
      period: 'Dec 2024 – Present',
      location: 'Remote',
      achievements: [
        'Developed and maintained apps, websites, backend services, and CI/CD pipelines',
        'Built reusable front-end components and contributed back-end APIs in Node.js/Express',
        'Designed and optimized database queries (MongoDB, MySQL) for feature delivery',
        'Collaborated with team members and designers to implement new features',
        'Debugged and resolved production issues, improving release stability'
      ]
    },
    {
      id: 2,
      title: 'Intern - Deep Learning & ML',
      company: 'Delhi University (DSKC)',
      period: 'May 2024 – Jul 2024',
      location: 'Delhi, India',
      achievements: [
        'Fine-tuned a deep learning classifier to improve accuracy',
        'Led a team of three engineers, managing collaboration and task allocation',
        'Wrote technical documentation and presented results with success metrics',
        'Awarded Best Project Award for timely delivery and innovation'
      ]
    }
  ];

  return (
    <div className="experience-section">
      <h1>Experience</h1>
      <div className="timeline">
        {experience.map((job, idx) => (
          <div key={job.id} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>{job.title}</h3>
              <p className="company">{job.company}</p>
              <p className="period">{job.period}</p>
              {job.location && <p style={{ color: '#888', fontSize: '0.9rem', marginTop: '0.2rem' }}>{job.location}</p>}
              <ul className="achievements">
                {job.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
