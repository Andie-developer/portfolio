import React, { useEffect, useState } from 'react';

const Hero = ({ setCurrentPage }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Create floating particles
    const particleCount = 80;
    const newParticles = [];
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        left: Math.random() * 100,
        animationDelay: Math.random() * 8,
        animationDuration: Math.random() * 3 + 5,
        size: Math.random() * 3 + 1
      });
    }
    
    setParticles(newParticles);
  }, []);


  const scrollToProjects = () => {
    setCurrentPage('projects');
  };

  const scrollToContact = () => {
    setCurrentPage('contact');
  };

  return (
    <section id="home" className="hero">
      <div className="bg-animation"></div>
      <div className="floating-particles">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.animationDelay}s`,
              animationDuration: `${particle.animationDuration}s`
            }}
          />
        ))}
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          Full-Stack Developer
        </h1>
        <p className="hero-subtitle">
          Crafting exceptional digital experiences with cutting-edge technology
        </p>
        
        <div className="hero-buttons">
          <button onClick={scrollToProjects} className="cta-button">
            <i className="fas fa-rocket"></i>
            View My Work
          </button>
          <button onClick={scrollToContact} className="cta-button cta-secondary">
            <i className="fas fa-paper-plane"></i>
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
