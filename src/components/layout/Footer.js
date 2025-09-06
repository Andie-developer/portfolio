import React from 'react';
import SocialIcons from '../ui/SocialIcons';
import '../../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];


  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Andani Tshidada</h3>
              <p>Full Stack Developer</p>
            </div>
            <p className="footer-description">
              Creating beautiful, functional, and user-centered digital experiences 
              that bring ideas to life.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    className="footer-link"
                    onClick={() => {
                      // This will be handled by the parent component
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>📧 andani.tshidada@email.com</p>
              <p>📱 +27 (0) 12 345 6789</p>
              <p>📍 South Africa</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Follow Me</h4>
            <SocialIcons size={20} />
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Andani Tshidada. All rights reserved.</p>
            <p>Built with ❤️ using React</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
