import React from 'react';
import { CheckCircle2, Star } from 'lucide-react';

const Pricing = () => {
  const cinematicPackages = [
    {
      name: '3-Minute Cinematic',
      price: '$125',
      period: 'Perfect for highlights',
      features: [
        'Professional cinematic editing',
        'High-quality audio mix',
        'Color grading included',
        'Digital delivery',
        'Quick turnaround',
      ],
    },
    {
      name: '5-Minute Cinematic',
      price: '$175',
      period: 'Ideal for recaps',
      features: [
        'Extended storytelling',
        'Professional editing & audio',
        'Color grading',
        'Digital delivery',
        'Music selection',
      ],
    },
    {
      name: '7-Minute Cinematic',
      price: '$225',
      period: 'Extended coverage',
      features: [
        'Comprehensive narrative',
        'Professional editing & audio',
        'Custom color grading',
        'Digital delivery',
        'Enhanced storytelling',
      ],
    },
    {
      name: '10-Minute Cinematic',
      price: '$300',
      period: 'Comprehensive film',
      features: [
        'Full event documentation',
        'Professional editing & audio',
        'Premium color grading',
        'Digital delivery',
        'Multiple scenes & sequences',
      ],
    },
    {
      name: '20-Minute Cinematic',
      price: '$350',
      period: 'Full event documentary',
      features: [
        'Complete ceremony coverage',
        'Professional multi-scene editing',
        'Premium color grading',
        'Digital delivery',
        'Extended narrative storytelling',
      ],
    },
    {
      name: '40-Minute Cinematic',
      price: '$450',
      period: 'Complete event film',
      features: [
        'Full event documentation',
        'Comprehensive editing',
        'Premium color grading',
        'Digital delivery',
        'Complete cinematic experience',
      ],
    },
  ];

  const signatureBundle = {
    name: 'The Cjay Special',
    price: '$450',
    period: 'Signature Bundle',
    featured: true,
    features: [
      'Creative freestyle coverage',
      'No strict time limit',
      'Creator-led vision',
      'One-of-a-kind cinematic experience',
      'Documentary-style approach',
    ],
  };

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

        {/* Cinematic Packages */}
        <div className="mb-16">
          <h3 className="text-3xl font-serif text-gold text-center mb-12">
            Cinematic Packages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-3 gap-8">
            {cinematicPackages.map((pkg, index) => (
              <PricingCard key={index} pkg={pkg} index={index} />
            ))}
          </div>
        </div>

        {/* Signature Bundle - The Cjay Special */}
        <div className="mb-20">
          <h3 className="text-3xl font-serif text-gold text-center mb-12">
            Signature Bundle
          </h3>
          <div className="max-w-2xl mx-auto">
            <PricingCard pkg={signatureBundle} index={0} />
          </div>
        </div>

        {/* Payment Policy */}
        <div className="mt-16 p-8 bg-deep-black/60 border border-gold/20 rounded-lg">
          <h3 className="text-gold text-2xl font-serif mb-6 text-center">Payment Policy</h3>
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="flex items-start gap-3 p-4 bg-charcoal/50 rounded-lg">
              <CheckCircle2 size={20} className="text-gold flex-shrink-0 mt-1" />
              <p className="text-warm-cream">50% deposit is required upfront to secure the service</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-charcoal/50 rounded-lg">
              <CheckCircle2 size={20} className="text-gold flex-shrink-0 mt-1" />
              <p className="text-warm-cream">Remaining balance is due before final delivery</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-charcoal/50 rounded-lg">
              <CheckCircle2 size={20} className="text-gold flex-shrink-0 mt-1" />
              <p className="text-warm-cream">Services are not confirmed until the deposit is received</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-charcoal/50 rounded-lg">
              <CheckCircle2 size={20} className="text-gold flex-shrink-0 mt-1" />
              <p className="text-warm-cream">Deposits are non-refundable once services are scheduled</p>
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
