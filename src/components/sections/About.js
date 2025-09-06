import React from 'react';

const About = () => {
  return (
    <section id="about">
      <h2 className="section-title animate-on-scroll">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p className="animate-on-scroll">I'm a passionate full-stack developer with 5+ years of experience creating scalable web applications and innovative digital solutions.</p>
          <p className="animate-on-scroll">My expertise spans modern JavaScript frameworks, cloud technologies, and user experience design, allowing me to build comprehensive solutions from concept to deployment.</p>
          <p className="animate-on-scroll">I thrive on solving complex problems and turning creative ideas into powerful, user-friendly applications that make a real impact.</p>
        </div>
      </div>
      
      <div className="skills-container">
        <h3 className="animate-on-scroll">Technical Expertise</h3>
        <div className="skills-grid">
          <div className="skill-item animate-on-scroll">
            <i className="fab fa-js-square"></i>
            <h4>JavaScript</h4>
            <p>ES6+, TypeScript</p>
          </div>
          <div className="skill-item animate-on-scroll">
            <i className="fab fa-react"></i>
            <h4>React</h4>
            <p>Hooks, Context, Redux</p>
          </div>
          <div className="skill-item animate-on-scroll">
            <i className="fab fa-node-js"></i>
            <h4>Node.js</h4>
            <p>Express, APIs, MongoDB</p>
          </div>
          <div className="skill-item animate-on-scroll">
            <i className="fab fa-python"></i>
            <h4>Python</h4>
            <p>Django, Flask, ML</p>
          </div>
          <div className="skill-item animate-on-scroll">
            <i className="fab fa-aws"></i>
            <h4>Cloud</h4>
            <p>AWS, Docker, CI/CD</p>
          </div>
          <div className="skill-item animate-on-scroll">
            <i className="fas fa-database"></i>
            <h4>Databases</h4>
            <p>PostgreSQL, MongoDB</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
