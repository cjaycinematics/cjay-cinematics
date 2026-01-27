import React from 'react';
import { CheckCircle2, Heart, Clock, Award } from 'lucide-react';

const MemorialServices = () => {
  const features = [
    'Full ceremony filming with professional audio',
    'Respectful, unobtrusive coverage',
    'Beautifully edited highlight film (5-10 minutes)',
    'Complete ceremony film (unedited or lightly edited)',
    'Optional family interviews and tributes',
    'Digital delivery via secure cloud link',
    'Physical USB drive included',
    'Quick turnaround (7-14 days)',
  ];

  return (
    <section id="memorial-services" className="py-24 px-4 bg-deep-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-off-white mb-6 gold-accent">Memorial & Funeral Services</h2>
            
            <p className="text-warm-cream text-lg mb-6 leading-relaxed">
              During life's most difficult moments, we provide compassionate, professional cinematic services 
              that honor your loved one with the dignity and respect they deserve.
            </p>
            
            <p className="text-warm-cream mb-8 leading-relaxed">
              Our approach is discreet and respectful, ensuring that families can focus on celebrating 
              their loved one while we carefully document the ceremony, eulogies, and precious moments 
              that tell their story.
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

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="service-card text-left">
              <Heart size={40} className="text-gold mb-4" />
              <h4 className="text-xl font-serif text-off-white mb-2">Compassionate Approach</h4>
              <p className="text-warm-cream text-sm">
                We understand the sensitivity of these moments and work with care and respect.
              </p>
            </div>
            
            <div className="service-card text-left">
              <Clock size={40} className="text-gold mb-4" />
              <h4 className="text-xl font-serif text-off-white mb-2">Quick Turnaround</h4>
              <p className="text-warm-cream text-sm">
                Receive your memorial film within 7-14 days, preserving memories when they matter most.
              </p>
            </div>
            
            <div className="service-card text-left">
              <Award size={40} className="text-gold mb-4" />
              <h4 className="text-xl font-serif text-off-white mb-2">Professional Quality</h4>
              <p className="text-warm-cream text-sm">
                Cinematic filming and editing that honors your loved one's legacy with excellence.
              </p>
            </div>
            
            <div className="service-card text-left">
              <CheckCircle2 size={40} className="text-gold mb-4" />
              <h4 className="text-xl font-serif text-off-white mb-2">Complete Coverage</h4>
              <p className="text-warm-cream text-sm">
                From ceremony to family interviews, we capture every meaningful moment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemorialServices;
