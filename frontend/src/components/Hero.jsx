import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToPricing = (e) => {
    e.preventDefault();
    const element = document.querySelector('#pricing');
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-content fade-in-up">
        <img
          src="https://customer-assets.emergentagent.com/job_9ccb7552-952b-4fc8-8354-965b1e13783c/artifacts/i4z8wb22_C3A9245E-F85D-4787-B9DA-A6F39C767447.png"
          alt="Cjay Cinematics Logo"
          className="hero-logo fade-in-up"
        />
        
        <h1 className="text-off-white mb-4 fade-in-up-delay-1">
          Cjay Cinematics
        </h1>
        
        <p className="hero-subtitle fade-in-up-delay-1">
          Cinematic Storytelling
        </p>
        
        <p className="hero-description fade-in-up-delay-2">
          We create cinematic films that preserve precious moments and honor the stories that matter most. 
          From celebrations of life to joyous events, every frame is crafted with intention, 
          artistry, and deep respect for the legacy we're capturing.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up-delay-3">
          <button
            onClick={scrollToContact}
            className="btn-primary"
          >
            Book Now
            <ArrowRight size={20} />
          </button>
          
          <button
            onClick={scrollToPricing}
            className="btn-secondary"
          >
            View Pricing Guide
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
