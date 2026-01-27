import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
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
    <footer className="footer">
      <div className="footer-content">
        {/* Logo */}
        <img
          src="https://customer-assets.emergentagent.com/job_9ccb7552-952b-4fc8-8354-965b1e13783c/artifacts/i4z8wb22_C3A9245E-F85D-4787-B9DA-A6F39C767447.png"
          alt="Cjay Cinematics"
          className="footer-logo"
        />

        {/* Brand Name */}
        <h3 className="text-2xl font-serif text-gold mb-2">Cjay Cinematics</h3>
        
        {/* Tagline */}
        <p className="footer-tagline">Honoring life. Preserving legacy.</p>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 mb-8">
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="text-warm-cream hover:text-gold transition-colors text-sm"
          >
            Home
          </a>
          <a
            href="#services"
            onClick={(e) => scrollToSection(e, '#services')}
            className="text-warm-cream hover:text-gold transition-colors text-sm"
          >
            Services
          </a>
          <a
            href="#portfolio"
            onClick={(e) => scrollToSection(e, '#portfolio')}
            className="text-warm-cream hover:text-gold transition-colors text-sm"
          >
            Portfolio
          </a>
          <a
            href="#testimonials"
            onClick={(e) => scrollToSection(e, '#testimonials')}
            className="text-warm-cream hover:text-gold transition-colors text-sm"
          >
            Testimonials
          </a>
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, '#about')}
            className="text-warm-cream hover:text-gold transition-colors text-sm"
          >
            About
          </a>
          <a
            href="#pricing"
            onClick={(e) => scrollToSection(e, '#pricing')}
            className="text-warm-cream hover:text-gold transition-colors text-sm"
          >
            Pricing
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="text-warm-cream hover:text-gold transition-colors text-sm"
          >
            Contact
          </a>
        </nav>

        {/* Social Links */}
        <div className="footer-social">
          <a
            href="https://instagram.com/cjaycinematics"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://facebook.com/cjaycinematics"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://youtube.com/cjaycinematics"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="YouTube"
          >
            <Youtube size={24} />
          </a>
        </div>

        {/* Contact Email */}
        <p className="text-warm-cream mb-2">
          <a 
            href="mailto:cjaycinematics@outlook.com"
            className="hover:text-gold transition-colors"
          >
            cjaycinematics@outlook.com
          </a>
        </p>

        {/* Copyright */}
        <p className="footer-copyright">
          © {currentYear} Cjay Cinematics. All rights reserved.
          <br />
          <span className="text-xs">
            Serving Oklahoma and surrounding areas with cinematic excellence.
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
