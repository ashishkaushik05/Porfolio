/**
 * Skills.jsx
 * Portfolio skills section
 */

import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['C/C++', 'Rust', 'Python', 'JavaScript']
    },
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'HTML', 'CSS', 'Browserify']
    },
    {
      category: 'Backend',
      skills: ['Node.js',"Nest.js", 'Express.js', 'REST APIs', 'SMTP Servers']
    },
    {
      category: 'Databases',
      skills: ['MongoDB', 'MySQL']
    },
    {
      category: 'DevOps & CI/CD',
      skills: ['Docker', 'Kubernetes', 'GitHub Actions', 'AWS']
    },
    {
      category: 'Cross-Platform',
      skills: ['React Native (Expo)', 'ElectronJS']
    },
    {
      category: 'Other',
      skills: ['Debugging', 'JSON', 'Documentation', 'Code Reviews', 'Socket.IO']
    }
  ];

  return (
    <div className="skills-section">
      <h1>Skills & Technology Stack</h1>
      <div className="skills-grid">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-category">
            <h3>{category.category}</h3>
            <ul>
              {category.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
