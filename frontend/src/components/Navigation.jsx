import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`nav-header ${isScrolled ? 'nav-scrolled' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-3"
          >
            <img
              src="https://customer-assets.emergentagent.com/job_9ccb7552-952b-4fc8-8354-965b1e13783c/artifacts/i4z8wb22_C3A9245E-F85D-4787-B9DA-A6F39C767447.png"
              alt="Cjay Cinematics"
              className="h-12 w-12"
            />
            <span className="text-lg font-serif font-semibold text-gold hidden sm:block">
              Cjay Cinematics
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-warm-cream hover:text-gold transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={(e) => scrollToSection(e, '#pricing')}
              className="btn-primary py-2 px-6 text-sm"
            >
              Pricing Guide
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-warm-cream hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 space-y-4 border-t border-gold/20">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block text-warm-cream hover:text-gold transition-colors text-base font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={(e) => scrollToSection(e, '#pricing')}
              className="block btn-primary text-center py-3 text-base"
            >
              Pricing Guide
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
