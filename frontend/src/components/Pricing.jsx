import React from 'react';
import { CheckCircle2, Star } from 'lucide-react';

const Pricing = () => {
  const memorialPackages = [
    {
      name: 'Essential Memorial',
      price: '$800',
      period: 'Starting Price',
      features: [
        'Full ceremony filming (up to 2 hours)',
        'Professional audio recording',
        'Highlight film (5-8 minutes)',
        'Digital delivery via cloud link',
        'USB drive included',
        '7-14 day turnaround',
      ],
    },
    {
      name: 'Premium Memorial',
      price: '$1,200',
      period: 'Most Popular',
      featured: true,
      features: [
        'Everything in Essential',
        'Full ceremony film (professionally edited)',
        'Family interview segments',
        'Photo slideshow tribute',
        'Custom music selection',
        'Priority turnaround (5-10 days)',
        'Two USB drives',
      ],
    },
    {
      name: 'Legacy Memorial',
      price: '$1,800',
      period: 'Complete Coverage',
      features: [
        'Everything in Premium',
        'Multi-camera coverage',
        'Extended family interviews',
        'Reception/gathering coverage',
        'Professional photo book',
        'Three USB drives',
        'Rush delivery available (3-7 days)',
      ],
    },
  ];

  const eventPackages = [
    {
      name: 'Celebration Essentials',
      price: '$1,000',
      period: 'Starting Price',
      features: [
        'Up to 4 hours coverage',
        'Single camera cinematography',
        'Highlight film (3-5 minutes)',
        'Professional audio',
        'Digital delivery',
        'USB drive',
        '14-21 day turnaround',
      ],
    },
    {
      name: 'Premier Celebration',
      price: '$1,600',
      period: 'Best Value',
      featured: true,
      features: [
        'Everything in Essentials',
        'Up to 6 hours coverage',
        'Dual camera setup',
        'Extended highlight film (5-8 minutes)',
        'Full event film',
        'Drone footage (when applicable)',
        'Two USB drives',
        '14 day turnaround',
      ],
    },
    {
      name: 'Cinematic Experience',
      price: '$2,400',
      period: 'Ultimate Package',
      features: [
        'Everything in Premier',
        'All-day coverage (up to 10 hours)',
        'Three camera angles',
        'Photo + video coverage',
        'Same-day highlight preview',
        'Professional color grading',
        'Three USB drives + photo book',
        'Rush delivery (7-10 days)',
      ],
    },
  ];

  const PricingCard = ({ pkg, index }) => (
    <div 
      className={`pricing-card ${pkg.featured ? 'featured' : ''} hover-lift`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {pkg.featured && (
        <div className="pricing-badge">
          <Star size={14} className="inline mr-1" />
          Popular
        </div>
      )}
      
      <h3 className="pricing-title">{pkg.name}</h3>
      <div className="pricing-price">{pkg.price}</div>
      <p className="pricing-period">{pkg.period}</p>
      
      <ul className="pricing-features">
        {pkg.features.map((feature, idx) => (
          <li key={idx}>
            <CheckCircle2 size={18} className="text-gold flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#contact').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }}
        className="btn-primary w-full justify-center mt-6"
      >
        Book This Package
      </a>
    </div>
  );

  return (
    <section id="pricing" className="py-24 px-4 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-off-white mb-4 gold-accent inline-block">Pricing Guide</h2>
          <p className="text-warm-cream text-lg max-w-3xl mx-auto opacity-90">
            Transparent, straightforward pricing for services that honor life's most meaningful moments. 
            All packages can be customized to fit your specific needs.
          </p>
        </div>

        {/* Memorial Services Pricing */}
        <div className="mb-20">
          <h3 className="text-3xl font-serif text-gold text-center mb-12">
            Memorial & Funeral Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {memorialPackages.map((pkg, index) => (
              <PricingCard key={index} pkg={pkg} index={index} />
            ))}
          </div>
        </div>

        {/* Event Services Pricing */}
        <div>
          <h3 className="text-3xl font-serif text-gold text-center mb-12">
            Celebrations & Events
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventPackages.map((pkg, index) => (
              <PricingCard key={index} pkg={pkg} index={index} />
            ))}
          </div>
        </div>

        {/* Add-Ons & Custom Services */}
        <div className="mt-16 p-8 bg-deep-black/60 border border-gold/20 rounded-lg">
          <h3 className="text-gold text-2xl font-serif mb-4 text-center">Add-Ons & Custom Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <p className="text-off-white font-semibold mb-2">Legacy Interviews</p>
              <p className="text-gold text-xl mb-1">$300+</p>
              <p className="text-warm-cream text-sm">Per interview session</p>
            </div>
            <div className="text-center">
              <p className="text-off-white font-semibold mb-2">Drone Footage</p>
              <p className="text-gold text-xl mb-1">$200</p>
              <p className="text-warm-cream text-sm">When applicable</p>
            </div>
            <div className="text-center">
              <p className="text-off-white font-semibold mb-2">Rush Delivery</p>
              <p className="text-gold text-xl mb-1">$150+</p>
              <p className="text-warm-cream text-sm">3-5 day turnaround</p>
            </div>
            <div className="text-center">
              <p className="text-off-white font-semibold mb-2">Photo Coverage</p>
              <p className="text-gold text-xl mb-1">$400+</p>
              <p className="text-warm-cream text-sm">Professional photography</p>
            </div>
            <div className="text-center">
              <p className="text-off-white font-semibold mb-2">Additional Hours</p>
              <p className="text-gold text-xl mb-1">$150/hr</p>
              <p className="text-warm-cream text-sm">Beyond package coverage</p>
            </div>
            <div className="text-center">
              <p className="text-off-white font-semibold mb-2">Custom Packages</p>
              <p className="text-gold text-xl mb-1">Contact</p>
              <p className="text-warm-cream text-sm">Tailored to your needs</p>
            </div>
          </div>
        </div>

        {/* Note about customization */}
        <div className="mt-8 text-center">
          <p className="text-warm-cream">
            All pricing is customizable based on your specific needs. 
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="text-gold hover:text-bronze ml-2 underline"
            >
              Contact us for a custom quote
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
