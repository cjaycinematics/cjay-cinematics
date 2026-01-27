import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Camera, Heart, Award } from 'lucide-react';

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Founder photos - professional images showcasing Cjay Reed
  const founderPhotos = [
    {
      url: 'https://customer-assets.emergentagent.com/job_9ccb7552-952b-4fc8-8354-965b1e13783c/artifacts/a7m1jmg5_IMG_5845.jpeg',
      alt: 'Cjay Reed - Founder',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_memorial-films/artifacts/z3tcyx6d_IMG_5845.jpeg',
      alt: 'Cjay Reed - Professional Portrait',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_memorial-films/artifacts/2g4ehwra_IMG_5168.jpeg',
      alt: 'Cjay Reed - Behind the Lens',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_memorial-films/artifacts/teg4t22p_IMG_5171.jpeg',
      alt: 'Cjay Reed - Cinematographer',
    },
  ];

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % founderPhotos.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [founderPhotos.length]);

  const goToNext = () => {
    setCurrentImage((prev) => (prev + 1) % founderPhotos.length);
  };

  const goToPrevious = () => {
    setCurrentImage((prev) => (prev - 1 + founderPhotos.length) % founderPhotos.length);
  };

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <section id="about" className="py-24 px-4 bg-deep-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-off-white mb-4 gold-accent inline-block">About the Founder</h2>
          <p className="text-warm-cream text-lg max-w-3xl mx-auto opacity-90">
            Behind every film is a commitment to excellence, compassion, and authentic storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bio Text - Left Side */}
          <div className="space-y-6">
            <h3 className="text-3xl font-serif text-gold">Cjay Reed</h3>
            <p className="text-lg text-warm-cream italic">Founder & Cinematographer</p>
            
            <p className="text-warm-cream leading-relaxed">
              Cjay Cinematics was founded on a simple but profound belief: every life has a story worth 
              telling, and every moment worth preserving deserves to be captured with artistry and respect.
            </p>
            
            <p className="text-warm-cream leading-relaxed">
              Specializing in memorial films and life celebrations, Cjay brings a unique combination of 
              technical excellence and deep empathy to every project. With a documentary-style approach 
              and cinematic eye, each film is crafted to honor legacies, preserve memories, and tell 
              stories that matter.
            </p>
            
            <p className="text-warm-cream leading-relaxed">
              Serving Oklahoma and surrounding areas, Cjay Cinematics is dedicated to providing families 
              with beautiful, timeless films they'll treasure for generations.
            </p>

            {/* Key Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <Heart size={32} className="text-gold mx-auto mb-2" />
                <p className="text-warm-cream text-sm font-medium">Compassionate</p>
              </div>
              <div className="text-center">
                <Camera size={32} className="text-gold mx-auto mb-2" />
                <p className="text-warm-cream text-sm font-medium">Professional</p>
              </div>
              <div className="text-center">
                <Award size={32} className="text-gold mx-auto mb-2" />
                <p className="text-warm-cream text-sm font-medium">Cinematic</p>
              </div>
            </div>
          </div>

          {/* Founder Photo Carousel - Right Side */}
          <div className="relative">
            <div className="founder-carousel">
              <div 
                className="founder-carousel-track"
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
              >
                {founderPhotos.map((photo, index) => (
                  <img
                    key={index}
                    src={photo.url}
                    alt={photo.alt}
                    className="founder-carousel-image"
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-gold p-3 rounded-full transition-all z-10"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-gold p-3 rounded-full transition-all z-10"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>

              {/* Dots Navigation */}
              <div className="carousel-controls">
                {founderPhotos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`carousel-dot ${index === currentImage ? 'active' : ''}`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <p className="text-center text-gold text-sm mt-4 italic">
              Founder – Cjay Reed
            </p>
          </div>
        </div>

        {/* Website Management Feature */}
        <div className="mt-16 p-8 bg-charcoal/50 border border-gold/20 rounded-lg">
          <h3 className="text-gold text-2xl font-serif mb-4">Easy Website Updates</h3>
          <p className="text-warm-cream mb-4">
            Your website is built for flexibility and easy management:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-off-white font-semibold mb-2">Portfolio Management</h4>
              <ul className="text-warm-cream space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Add videos by embedding YouTube/Vimeo links</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Upload photos directly to gallery sections</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Organize content by category (Memorial, Events, etc.)</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-off-white font-semibold mb-2">Content Updates</h4>
              <ul className="text-warm-cream space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Update pricing packages anytime</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Add new testimonials as they come in</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Edit service descriptions and features</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
