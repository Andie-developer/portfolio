import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title animate-on-scroll">Let's Build Something Amazing</h2>
      <p className="animate-on-scroll">Ready to turn your ideas into reality? Let's collaborate and create something extraordinary together.</p>
      <div className="contact-info">
        <a href="mailto:andani.tshidada@email.com" className="contact-item animate-on-scroll">
          <i className="fas fa-envelope"></i>
          <h4>Email</h4>
          <p>andani.tshidada@email.com</p>
        </a>
        <a href="https://linkedin.com/in/andani-tshidada" className="contact-item animate-on-scroll">
          <i className="fab fa-linkedin"></i>
          <h4>LinkedIn</h4>
          <p>Connect professionally</p>
        </a>
        <a href="https://github.com/andani-tshidada" className="contact-item animate-on-scroll">
          <i className="fab fa-github"></i>
          <h4>GitHub</h4>
          <p>View my code</p>
        </a>
        <a href="tel:+27123456789" className="contact-item animate-on-scroll">
          <i className="fas fa-phone"></i>
          <h4>Phone</h4>
          <p>+27 (0) 12 345 6789</p>
        </a>
      </div>
    </section>
  );
};

export default Contact;
