/**
 * VisualLayout.jsx
 * Visual mode layout component - Single page with smooth scrolling sections
 */

import React, { useState } from 'react';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Skills from './Skills.jsx';
import Experience from './Experience.jsx';
import Contact from './Contact.jsx';
import Button from '../ui/Button.jsx';

const VisualLayout = ({ onSwitchMode }) => {
  const [activeSection, setActiveSection] = useState('about');

  const sections = {
    about: { component: About, label: 'About', icon: '👤' },
    projects: { component: Projects, label: 'Projects', icon: '💻' },
    skills: { component: Skills, label: 'Skills', icon: '⚡' },
    experience: { component: Experience, label: 'Experience', icon: '📅' },
    contact: { component: Contact, label: 'Contact', icon: '📧' }
  };

  return (
    <div className="visual-layout">
      {/* Fixed Header/Navigation */}
      <header className="visual-header">
        <div className="header-content">
          <h1 className="header-logo">ASHISH.DEV</h1>
          <nav className="header-nav">
            {Object.entries(sections).map(([key, section]) => (
              <button
                key={key}
                className={`nav-tab ${activeSection === key ? 'active' : ''}`}
                onClick={() => setActiveSection(key)}
              >
                <span className="tab-icon">{section.icon}</span>
                <span className="tab-label">{section.label}</span>
              </button>
            ))}
          </nav>
          <Button
            onClick={onSwitchMode}
            variant="secondary"
            className="mode-toggle"
          >
            🖥 Terminal
          </Button>
        </div>
      </header>

      {/* Main Content Area with smooth transitions */}
      <main className="visual-main">
        <div className="content-wrapper">
          {Object.entries(sections).map(([key, section]) => (
            <section
              key={key}
              className={`content-section ${activeSection === key ? 'active' : ''}`}
            >
              {section.component && <section.component />}
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="visual-footer">
        <p>&copy; 2025 Ashish. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default VisualLayout;
