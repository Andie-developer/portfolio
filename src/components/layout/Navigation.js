import React, { useState, useEffect } from 'react';

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: 'fas fa-home' },
    { id: 'skills', label: 'Skills', icon: 'fas fa-user' },
    { id: 'projects', label: 'Projects', icon: 'fas fa-laptop-code' },
    { id: 'contact', label: 'Contact', icon: 'fas fa-envelope' }
  ];

  const isActive = (id) => currentPage === id;

  return (
    <header className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <nav>
        <div className="logo">
          <button 
            className="logo-link"
            onClick={() => setCurrentPage('home')}
          >
            <i className="fas fa-code"></i> Andani Tshidada
          </button>
        </div>
        <ul className="nav-links">
          {navItems.map((item, index) => (
            <li key={item.id}>
              <button 
                className={`nav-link ${isActive(item.id) ? 'active' : ''}`}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsMobileMenuOpen(false);
                }}
              >
                <i className={item.icon}></i> {item.label}
              </button>
            </li>
          ))}
        </ul>
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
