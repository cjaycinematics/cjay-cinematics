import React from 'react';
import { CheckCircle2, PartyPopper, Sparkles, Gift, Music } from 'lucide-react';

const EventServices = () => {
  const features = [
    'Full event coverage from start to finish',
    'Multiple camera angles for dynamic storytelling',
    'Professional audio recording',
    'Cinematic highlight film (3-8 minutes)',
    'Full event film (1-2 hours)',
    'Drone footage available (when applicable)',
    'Color grading and professional editing',
    'Digital delivery + physical USB',
    'Delivery within 14-30 days',
  ];

  return (
    <section id="event-services" className="py-24 px-4 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Feature Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 order-2 lg:order-1">
            <div className="service-card text-left">
              <PartyPopper size={40} className="text-gold mb-4" />
              <h4 className="text-xl font-serif text-off-white mb-2">Joyful Coverage</h4>
              <p className="text-warm-cream text-sm">
                Capturing the energy, emotion, and celebration of your special day.
              </p>
            </div>
            
            <div className="service-card text-left">
              <Sparkles size={40} className="text-gold mb-4" />
              <h4 className="text-xl font-serif text-off-white mb-2">Cinematic Style</h4>
              <p className="text-warm-cream text-sm">
                Professional cinematography that makes your event feel like a movie.
              </p>
            </div>
            
            <div className="service-card text-left">
              <Music size={40} className="text-gold mb-4" />
              <h4 className="text-xl font-serif text-off-white mb-2">Custom Soundtracks</h4>
              <p className="text-warm-cream text-sm">
                Music selection that perfectly complements the tone and emotion of your film.
              </p>
            </div>
            
            <div className="service-card text-left">
              <Gift size={40} className="text-gold mb-4" />
              <h4 className="text-xl font-serif text-off-white mb-2">Perfect Keepsake</h4>
              <p className="text-warm-cream text-sm">
                A timeless film you'll treasure and share for years to come.
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-off-white mb-6 gold-accent">Celebrations & Events</h2>
            
            <p className="text-warm-cream text-lg mb-6 leading-relaxed">
              From weddings to birthdays, anniversaries to corporate events, we create cinematic films 
              that capture the joy, emotion, and unforgettable moments of your special occasions.
            </p>
            
            <p className="text-warm-cream mb-8 leading-relaxed">
              Our documentary-style approach ensures natural, authentic storytelling while our cinematic 
              eye transforms your celebration into a beautiful visual narrative that you'll cherish forever.
            </p>

            <h3 className="text-gold text-2xl font-serif mb-4">What's Included</h3>
            
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-warm-cream">
                  <CheckCircle2 size={20} className="text-gold flex-shrink-0 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#pricing').scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="btn-primary inline-flex"
            >
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventServices;
