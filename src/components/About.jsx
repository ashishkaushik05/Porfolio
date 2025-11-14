/**
 * About.jsx
 * Portfolio about section
 */

import React from "react";

const About = () => {
  return (
    <div className="about-section">
      <h1>About Me</h1>
      <p>
        Full-stack engineer passionate about building reliable, scalable, and
        user-centric digital experiences. I work across the stack designing
        reusable front-end components, developing robust back-end APIs, and
        implementing efficient, database-driven features.
      </p>
      <p>
        I enjoy mobile development and have built several applications
        end-to-end. I learned NestJS to ensure I create secure, maintainable,
        and production-ready systems. I’ve also worked with Node.js addons to
        push performance and extend native capabilities when needed.
      </p>
      <p>
        Experienced in debugging complex systems, automating workflows with
        CI/CD, and collaborating with product teams to deliver polished
        solutions. I’m deeply interested in decentralized finance, blockchain,
        and emerging technologies that shape the future of software.
      </p>
      <h3>Education</h3>
      <ul>
        <li>
          <strong>Bachelor of Engineering – Information Security</strong>
          <div
            style={{
              color: "#ffa500",
              fontSize: "0.9rem",
              marginTop: "0.3rem",
            }}
          >
            Chandigarh University, Gharuan, Mohali, Punjab • 2023 – 2027
          </div>
          <div
            style={{ fontSize: "0.9rem", marginTop: "0.2rem", color: "#888" }}
          >
            Relevant Coursework: Software Engineering, Data Structures,
            Databases, Machine Learning, Systems Programming, Product Management
          </div>
        </li>
        <li>
          <strong>Higher Secondary Education (Score: 83%)</strong>
          <div
            style={{
              color: "#ffa500",
              fontSize: "0.9rem",
              marginTop: "0.3rem",
            }}
          >
            The Vivekanand School, Delhi • 2021 – 2023
          </div>
        </li>
      </ul>
      <h3>Contact</h3>
      <ul>
        <li>
          <strong>Email:</strong> ashish._.kaushik@outlook.com
        </li>
        <li>
          <strong>Mobile:</strong> +91-7494825211
        </li>
        <li>
          <strong>GitHub:</strong> github.com/ashishkaushik05
        </li>
        <li>
          <strong>Location:</strong> Chandigarh, Punjab, India
        </li>
      </ul>
      <h3>Interests</h3>
      <ul>
        <li>
          Full-stack development, debugging and optimization, product
          engineering, and building reliable mobile applications.
        </li>
        <li>
          Secure backend architecture with NestJS, performance-focused systems,
          and extending functionality using Node.js addons.
        </li>
        <li>
          AI/ML, and emerging technologies.
        </li>
      </ul>
    </div>
  );
};

export default About;
