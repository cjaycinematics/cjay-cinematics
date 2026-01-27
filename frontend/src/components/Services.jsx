import React from 'react';
import { Heart, PartyPopper, Users, Video, Camera, Film } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Heart size={48} />,
      title: 'Funeral & Memorial Films',
      description: 'Respectful, cinematic tributes that honor and celebrate lives lived with dignity and grace.',
    },
    {
      icon: <PartyPopper size={48} />,
      title: 'Celebration of Life Films',
      description: 'Joyful commemorations that capture the spirit, personality, and cherished memories of loved ones.',
    },
    {
      icon: <Users size={48} />,
      title: 'Family Tributes & Legacy Interviews',
      description: 'Preserve family stories, wisdom, and memories for generations to come through thoughtful interviews.',
    },
    {
      icon: <Video size={48} />,
      title: 'Event Coverage',
      description: 'Cinematic documentation of weddings, birthdays, anniversaries, and special milestones.',
    },
    {
      icon: <Film size={48} />,
      title: 'Highlight Film Add-On',
      description: 'A beautifully edited short film capturing the most meaningful moments of your event.',
    },
    {
      icon: <Camera size={48} />,
      title: 'Photo + Video Coverage',
      description: 'Comprehensive coverage combining cinematic video with professional photography.',
    },
  ];

  return (
    <section id="services" className="py-24 px-4 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-off-white mb-4 gold-accent inline-block">Our Services</h2>
          <p className="text-warm-cream text-lg max-w-3xl mx-auto opacity-90">
            Every service is delivered with professionalism, discretion, and an unwavering commitment 
            to preserving the moments that matter most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
