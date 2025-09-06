import React, { useState, useEffect } from 'react';
import './styles/theme.css';
import './styles/navigation.css';
import './styles/Hero.css';
import './styles/About.css';
import './styles/Projects.css';
import './styles/Contact.css';
import './styles/App.css';

// Components
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';

// Sections
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Add Font Awesome icons
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
    document.head.appendChild(link);

    // Add scroll animations
    const handleScrollAnimations = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      const windowHeight = window.innerHeight;
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('animated');
        }
      });
    };

    // Add mouse parallax effect
    const handleMouseParallax = (e) => {
      const bgAnimation = document.querySelector('.bg-animation');
      if (bgAnimation) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        bgAnimation.style.transform = `translate(${x * 20}px, ${y * 20}px) rotate(${x * 2}deg)`;
      }
    };

            // Scroll to top functionality
            const handleScrollToTop = () => {
              const scrollToTopBtn = document.getElementById('scrollToTop');
              
              window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                  scrollToTopBtn.classList.add('visible');
                } else {
                  scrollToTopBtn.classList.remove('visible');
                }
              });

              scrollToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              });
            };

            // Add event listeners
            window.addEventListener('scroll', handleScrollAnimations);
            document.addEventListener('mousemove', handleMouseParallax);

            // Setup scroll to top
            handleScrollToTop();

            // Initial check
            handleScrollAnimations();

            return () => {
              window.removeEventListener('scroll', handleScrollAnimations);
              document.removeEventListener('mousemove', handleMouseParallax);
            };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="page home-page">
            <Hero setCurrentPage={setCurrentPage} />
            <About />
          </div>
        );
      case 'skills':
        return (
          <div className="page skills-page">
            <Skills />
          </div>
        );
      case 'projects':
        return (
          <div className="page projects-page">
            <Projects />
          </div>
        );
      case 'contact':
        return (
          <div className="page contact-page">
            <Contact />
          </div>
        );
      default:
        return (
          <div className="page home-page">
            <Hero setCurrentPage={setCurrentPage} />
            <About />
          </div>
        );
    }
  };

          return (
            <div className="App">
              <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
              
              <main className="main-content">
                {renderPage()}
              </main>
              
              <Footer />
              
              <button className="scroll-to-top" id="scrollToTop">
                <i className="fas fa-arrow-up"></i>
              </button>
            </div>
          );
}

export default App;
