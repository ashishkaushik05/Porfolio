/**
 * Contact.jsx
 * Portfolio contact section
 */

import React from 'react';

const Contact = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = './assets/resume.pdf';
    link.download = 'Ashish_Kaushik_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="contact-section">
      <h1>Get In Touch</h1>
      <p className="intro">
        I'm always open to new opportunities, collaborations, and interesting conversations.
        Feel free to reach out!
      </p>

      <div className="contact-methods">
        <div className="contact-item">
          <h3>Email</h3>
          <a href="mailto:ashish._.kaushik@outlook.com">ashish._.kaushik@outlook.com</a>
        </div>

        <div className="contact-item">
          <h3>Mobile</h3>
          <a href="tel:+917494825211">+91-7494825211</a>
        </div>

        <div className="contact-item">
          <h3>GitHub</h3>
          <a href="https://github.com/ashishkaushik05"  target="_blank" rel="noopener noreferrer">
            github.com/ashishkaushik05
          </a>
        </div>

        {/* <div className="contact-item">
          <h3>Location</h3>
          <p style={{ color: '#00ff41' }}>Chandigarh, Punjab, India</p>
        </div>
 */}
        <div className="contact-item resume-download">
          <h3>📄 Resume</h3>
          <button onClick={handleDownloadResume} className="btn btn-secondary">
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
