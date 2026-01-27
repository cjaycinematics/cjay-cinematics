import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Camera, Heart, Award } from 'lucide-react';

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Founder photos - professional images showcasing Cjay Reed
  const founderPhotos = [
    {
      url: 'https://customer-assets.emergentagent.com/job_memorial-films/artifacts/zco69ipl_IMG_0226.png',
      alt: 'Cjay Reed - Professional',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_memorial-films/artifacts/dpf5o94u_129A1529.jpeg',
      alt: 'Cjay Reed - Cinematographer',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_memorial-films/artifacts/e8hki8mg_IMG_5866.jpeg',
      alt: 'Cjay Reed - Behind the Lens',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_memorial-films/artifacts/gpnhwmoc_IMG_5845.jpeg',
      alt: 'Cjay Reed - Founder',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_memorial-films/artifacts/z1gc71kf_IMG_5164.jpeg',
      alt: 'Cjay Reed - Portrait',
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

        <div className="max-w-5xl mx-auto">
          {/* Founder Photo Carousel - Top/Center */}
          <div className="mb-12">
            <div className="relative max-w-2xl mx-auto">
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
                      className="founder-carousel-image object-cover"
                      style={{ 
                        height: '450px',
                        objectPosition: 'center 20%'
                      }}
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

          {/* Bio Text - Below Photos */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <h3 className="text-3xl font-serif text-gold text-center">Cjay Reed</h3>
            <p className="text-lg text-warm-cream italic text-center">Founder & Cinematographer</p>
            
            <p className="text-warm-cream leading-relaxed">
              Cjay Cinematics was founded by Cjay Reed, a creative with a deep respect for family, culture, 
              and meaningful moments. With a strong skill set in capturing photos and videos through modern 
              technology, Cjay took initiative to develop his talent into purposeful storytelling.
            </p>
            
            <p className="text-warm-cream leading-relaxed">
              Through experience in funeral service environments and community-based events, Cjay found his 
              calling in creating funeral cinematics work that prioritizes dignity, accuracy, and respect 
              during life's most sensitive moments.
            </p>
            
            <p className="text-warm-cream leading-relaxed">
              Whether documenting a funeral service or a life celebration, the focus remains the same: 
              preserving moments with care, intention, and respect for those involved.
            </p>
            
            <p className="text-warm-cream leading-relaxed">
              Cjay plans to finish EMS school and become an EMT. He plans to attend the University of Central 
              Oklahoma and major in Funeral Science. In the future, Cjay also plans to become a firefighter 
              and continue serving the community.
            </p>
            
            <p className="text-warm-cream leading-relaxed">
              Cjay currently works at Keith D. Biglow Funeral Home in Muskogee, Oklahoma, where he is gaining 
              real experience working with families and learning the funeral service profession.
            </p>
            
            <p className="text-warm-cream leading-relaxed">
              Cjay also holds leadership roles in his school and community. He is the President of the Muskogee 
              Alumni Chapter Kappa League, where he has been involved for seven years. He also serves as the Vice 
              President of Business Professionals of America (BPA).
            </p>
            
            <p className="text-warm-cream leading-relaxed">
              Cjay is a senior at Muskogee High School and plans to graduate in May 2026.
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
